<?php
/**
 * Plugin Name: VJR 221 — Wolof (title_wo / excerpt_wo / content_wo)
 * Description: Enregistre et expose les traductions Wolof pour les posts et l’API geo vjr221/v1. Source de vérité CMS pour l’app mobile.
 * Version: 1.0.0
 * Author: VJR 221
 * Text Domain: vjr221-wolof
 * Requires at least: 6.0
 * Requires PHP: 7.4
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'VJR221_WO_VERSION', '1.0.0' );
define( 'VJR221_WO_FILE', __FILE__ );
define( 'VJR221_WO_DIR', plugin_dir_path( __FILE__ ) );

/**
 * Meta keys partagés posts + API geo.
 */
const VJR221_WO_META_KEYS = array( 'title_wo', 'excerpt_wo', 'content_wo' );

/* -------------------------------------------------------------------------- */
/* 1. Enregistrement meta + exposition wp/v2                                   */
/* -------------------------------------------------------------------------- */

add_action( 'init', 'vjr221_wo_register_post_meta' );

function vjr221_wo_register_post_meta() {
	foreach ( VJR221_WO_META_KEYS as $key ) {
		register_post_meta(
			'post',
			$key,
			array(
				'type'              => 'string',
				'single'            => true,
				'show_in_rest'      => true,
				'auth_callback'     => function () {
					return current_user_can( 'edit_posts' );
				},
				'sanitize_callback' => 'vjr221_wo_sanitize_meta',
			)
		);
	}
}

function vjr221_wo_sanitize_meta( $value ) {
	if ( ! is_string( $value ) ) {
		return '';
	}
	return wp_kses_post( $value );
}

add_filter( 'rest_prepare_post', 'vjr221_wo_rest_prepare_post', 10, 3 );

function vjr221_wo_rest_prepare_post( $response, $post, $request ) {
	if ( ! ( $response instanceof WP_REST_Response ) ) {
		return $response;
	}
	$data = $response->get_data();
	foreach ( VJR221_WO_META_KEYS as $key ) {
		$raw = get_post_meta( $post->ID, $key, true );
		$data[ $key ] = ( is_string( $raw ) && $raw !== '' ) ? $raw : null;
	}
	$response->set_data( $data );
	return $response;
}

add_filter( 'vjr221_geo_item', 'vjr221_wo_filter_geo_item', 10, 3 );

function vjr221_wo_filter_geo_item( $item, $post_id, $context = 'list' ) {
	if ( ! is_array( $item ) || ! $post_id ) {
		return $item;
	}
	$title_wo   = get_post_meta( $post_id, 'title_wo', true );
	$excerpt_wo = get_post_meta( $post_id, 'excerpt_wo', true );
	$item['title_wo']   = ( is_string( $title_wo ) && $title_wo !== '' ) ? $title_wo : null;
	$item['excerpt_wo'] = ( is_string( $excerpt_wo ) && $excerpt_wo !== '' ) ? $excerpt_wo : null;
	if ( $context === 'detail' ) {
		$content_wo = get_post_meta( $post_id, 'content_wo', true );
		$item['content_wo'] = ( is_string( $content_wo ) && $content_wo !== '' ) ? $content_wo : null;
	}
	return $item;
}

add_filter( 'rest_post_dispatch', 'vjr221_wo_enrich_vjr221_response', 20, 3 );

function vjr221_wo_enrich_vjr221_response( $result, $server, $request ) {
	if ( ! ( $result instanceof WP_REST_Response ) ) {
		return $result;
	}
	$route = $request->get_route();
	if ( strpos( $route, '/vjr221/v1/' ) !== 0 ) {
		return $result;
	}
	$data = $result->get_data();
	if ( ! is_array( $data ) ) {
		return $result;
	}
	if ( isset( $data['items'] ) && is_array( $data['items'] ) ) {
		foreach ( $data['items'] as $i => $item ) {
			if ( ! is_array( $item ) || empty( $item['id'] ) ) {
				continue;
			}
			$data['items'][ $i ] = vjr221_wo_filter_geo_item( $item, (int) $item['id'], 'list' );
		}
		$result->set_data( $data );
		return $result;
	}
	if ( ! empty( $data['id'] ) && isset( $data['slug'] ) ) {
		$enriched = vjr221_wo_filter_geo_item( $data, (int) $data['id'], 'detail' );
		$result->set_data( $enriched );
	}
	return $result;
}

add_action( 'add_meta_boxes', 'vjr221_wo_add_meta_box' );

function vjr221_wo_add_meta_box() {
	add_meta_box(
		'vjr221_wo_box',
		__( 'Traduction Wolof (VJR 221)', 'vjr221-wolof' ),
		'vjr221_wo_render_meta_box',
		'post',
		'normal',
		'default'
	);
}

function vjr221_wo_render_meta_box( $post ) {
	wp_nonce_field( 'vjr221_wo_save', 'vjr221_wo_nonce' );
	$title   = get_post_meta( $post->ID, 'title_wo', true );
	$excerpt = get_post_meta( $post->ID, 'excerpt_wo', true );
	$content = get_post_meta( $post->ID, 'content_wo', true );
	?>
	<p>
		<label for="vjr221_title_wo"><strong><?php esc_html_e( 'Titre Wolof', 'vjr221-wolof' ); ?></strong></label><br />
		<input type="text" class="widefat" id="vjr221_title_wo" name="vjr221_title_wo" value="<?php echo esc_attr( $title ); ?>" />
	</p>
	<p>
		<label for="vjr221_excerpt_wo"><strong><?php esc_html_e( 'Extrait Wolof', 'vjr221-wolof' ); ?></strong></label><br />
		<textarea class="widefat" rows="3" id="vjr221_excerpt_wo" name="vjr221_excerpt_wo"><?php echo esc_textarea( $excerpt ); ?></textarea>
	</p>
	<p>
		<label for="vjr221_content_wo"><strong><?php esc_html_e( 'Contenu Wolof', 'vjr221-wolof' ); ?></strong></label><br />
		<textarea class="widefat" rows="12" id="vjr221_content_wo" name="vjr221_content_wo"><?php echo esc_textarea( $content ); ?></textarea>
		<span class="description"><?php esc_html_e( 'Markdown simple accepté (### Jëmmal). L’app mobile parse le même format que le pack local.', 'vjr221-wolof' ); ?></span>
	</p>
	<?php
}

add_action( 'save_post_post', 'vjr221_wo_save_meta_box' );

function vjr221_wo_save_meta_box( $post_id ) {
	if ( ! isset( $_POST['vjr221_wo_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['vjr221_wo_nonce'] ) ), 'vjr221_wo_save' ) ) {
		return;
	}
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}
	if ( ! current_user_can( 'edit_post', $post_id ) ) {
		return;
	}
	$map = array(
		'title_wo'   => 'vjr221_title_wo',
		'excerpt_wo' => 'vjr221_excerpt_wo',
		'content_wo' => 'vjr221_content_wo',
	);
	foreach ( $map as $meta_key => $field ) {
		if ( ! isset( $_POST[ $field ] ) ) {
			continue;
		}
		$value = vjr221_wo_sanitize_meta( wp_unslash( $_POST[ $field ] ) );
		if ( $value === '' ) {
			delete_post_meta( $post_id, $meta_key );
		} else {
			update_post_meta( $post_id, $meta_key, $value );
		}
	}
}

add_action( 'admin_menu', 'vjr221_wo_admin_menu' );

function vjr221_wo_admin_menu() {
	add_management_page(
		__( 'VJR 221 Wolof', 'vjr221-wolof' ),
		__( 'VJR 221 Wolof', 'vjr221-wolof' ),
		'manage_options',
		'vjr221-wolof-seed',
		'vjr221_wo_render_seed_page'
	);
}

function vjr221_wo_render_seed_page() {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	$notice = '';
	if ( isset( $_POST['vjr221_wo_seed_run'] ) && check_admin_referer( 'vjr221_wo_seed' ) ) {
		$result = vjr221_wo_run_seed();
		$notice = sprintf(
			__( 'Import terminé : %1$d fiche(s) mise(s) à jour, %2$d slug(s) introuvable(s).', 'vjr221-wolof' ),
			$result['updated'],
			count( $result['missing'] )
		);
		if ( $result['missing'] ) {
			$notice .= ' ' . __( 'Manquants :', 'vjr221-wolof' ) . ' ' . esc_html( implode( ', ', $result['missing'] ) );
		}
	}
	?>
	<div class="wrap">
		<h1><?php esc_html_e( 'VJR 221 — Wolof', 'vjr221-wolof' ); ?></h1>
		<?php if ( $notice ) : ?>
			<div class="notice notice-success"><p><?php echo esc_html( $notice ); ?></p></div>
		<?php endif; ?>
		<p><?php esc_html_e( 'Importe les titres, extraits et contenus Wolof des 14 régions depuis le pack mobile (vague 7). N’écrase que les meta vides, sauf si vous cochez « Forcer ».', 'vjr221-wolof' ); ?></p>
		<form method="post">
			<?php wp_nonce_field( 'vjr221_wo_seed' ); ?>
			<label>
				<input type="checkbox" name="vjr221_wo_seed_force" value="1" />
				<?php esc_html_e( 'Forcer l’écrasement des meta déjà renseignées', 'vjr221-wolof' ); ?>
			</label>
			<p>
				<button type="submit" name="vjr221_wo_seed_run" class="button button-primary" value="1">
					<?php esc_html_e( 'Importer les 14 régions', 'vjr221-wolof' ); ?>
				</button>
			</p>
		</form>
		<hr />
		<p><strong><?php esc_html_e( 'Test API après import :', 'vjr221-wolof' ); ?></strong></p>
		<pre style="background:#f6f7f7;padding:12px;overflow:auto">curl -s '<?php echo esc_url( home_url( '/wp-json/wp/v2/posts?slug=region-de-dakar&_fields=title,title_wo,excerpt_wo,content_wo' ) ); ?>'
curl -s '<?php echo esc_url( home_url( '/wp-json/vjr221/v1/regions/2153' ) ); ?>'</pre>
	</div>
	<?php
}

function vjr221_wo_run_seed() {
	$force = ! empty( $_POST['vjr221_wo_seed_force'] );
	$seed_file = VJR221_WO_DIR . 'seed-regions.php';
	if ( ! file_exists( $seed_file ) ) {
		return array( 'updated' => 0, 'missing' => array( 'seed-regions.php absent' ) );
	}
	$seed = include $seed_file;
	if ( ! is_array( $seed ) ) {
		return array( 'updated' => 0, 'missing' => array( 'seed invalide' ) );
	}
	$updated = 0;
	$missing = array();
	foreach ( $seed as $slug => $fields ) {
		$posts = get_posts(
			array(
				'name'           => $slug,
				'post_type'      => 'post',
				'post_status'    => 'publish',
				'posts_per_page' => 1,
				'fields'         => 'ids',
			)
		);
		if ( ! $posts ) {
			$missing[] = $slug;
			continue;
		}
		$post_id = (int) $posts[0];
		foreach ( VJR221_WO_META_KEYS as $key ) {
			if ( empty( $fields[ $key ] ) ) {
				continue;
			}
			$existing = get_post_meta( $post_id, $key, true );
			if ( ! $force && is_string( $existing ) && $existing !== '' ) {
				continue;
			}
			update_post_meta( $post_id, $key, vjr221_wo_sanitize_meta( $fields[ $key ] ) );
		}
		$updated++;
	}
	return array( 'updated' => $updated, 'missing' => $missing );
}

register_activation_hook( __FILE__, function () {
	vjr221_wo_register_post_meta();
	flush_rewrite_rules( false );
} );

register_deactivation_hook( __FILE__, function () {
	flush_rewrite_rules( false );
} );
