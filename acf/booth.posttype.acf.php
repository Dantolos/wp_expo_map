<?php
add_action( 'init', function() {
	register_post_type( 'booth', array(
		'labels' => array(
			'name'                  => 'Booths',
			'singular_name'         => 'Booth',
			'menu_name'             => 'Booth',
			'all_items'             => 'All Booth',
			'edit_item'             => 'Edit Booth',
			'view_item'             => 'View Booth',
			'view_items'            => 'View Booth',
			'add_new_item'          => 'Add New Booth',
			'add_new'               => 'Add New Booth',
			'new_item'              => 'New Booth',
			'parent_item_colon'     => 'Parent Booth:',
			'search_items'          => 'Search Booth',
			'not_found'             => 'No booth found',
			'not_found_in_trash'    => 'No booth found in Trash',
			'archives'              => 'Booth Archives',
			'attributes'            => 'Booth Attributes',
			'insert_into_item'      => 'Insert into booth',
			'uploaded_to_this_item' => 'Uploaded to this booth',
			'filter_items_list'     => 'Filter booth list',
			'filter_by_date'        => 'Filter booth by date',
			'items_list_navigation' => 'Booth list navigation',
			'items_list'            => 'Booth list',
			'item_published'        => 'Booth published.',
			'item_published_privately' => 'Booth published privately.',
			'item_reverted_to_draft' => 'Booth reverted to draft.',
			'item_scheduled'        => 'Booth scheduled.',
			'item_updated'          => 'Booth updated.',
			'item_link'             => 'Booth Link',
			'item_link_description' => 'A link to a booth.',
		),
		'public'           => true,
		'show_in_rest'     => true,  // Required for Gutenberg & REST API access
		'menu_icon'        => 'dashicons-store',
		'supports'         => array( 'title' ),
		'delete_with_user' => false,
	) );
} );

/**
 * Expose ACF fields in the WP REST API for the 'booth' post type.
 *
 * This makes ACF data available at:
 *   /wp-json/wp/v2/booth/<id>  →  response.acf.*
 *
 * Requires: ACF PRO 5.11+ OR the free "ACF to REST API" plugin,
 * OR this manual register_rest_field approach below (works with free ACF).
 */
add_action( 'rest_api_init', function() {
	register_rest_field(
		'booth',
		'acf',
		array(
			'get_callback' => function( $post ) {
				if ( ! function_exists( 'get_fields' ) ) {
					return null;
				}
				return get_fields( $post['id'] );
			},
			'schema' => array(
				'description' => 'ACF fields for the booth post type.',
				'type'        => 'object',
			),
		)
	);
} );
