<?php
add_action( 'init', function() {
	register_post_type( 'booth', array(
	'labels' => array(
		'name' => 'Booths',
		'singular_name' => 'Booth',
		'menu_name' => 'Booth',
		'all_items' => 'All Booth',
		'edit_item' => 'Edit Booth',
		'view_item' => 'View Booth',
		'view_items' => 'View Booth',
		'add_new_item' => 'Add New Booth',
		'add_new' => 'Add New Booth',
		'new_item' => 'New Booth',
		'parent_item_colon' => 'Parent Booth:',
		'search_items' => 'Search Booth',
		'not_found' => 'No booth found',
		'not_found_in_trash' => 'No booth found in Trash',
		'archives' => 'Booth Archives',
		'attributes' => 'Booth Attributes',
		'insert_into_item' => 'Insert into booth',
		'uploaded_to_this_item' => 'Uploaded to this booth',
		'filter_items_list' => 'Filter booth list',
		'filter_by_date' => 'Filter booth by date',
		'items_list_navigation' => 'Booth list navigation',
		'items_list' => 'Booth list',
		'item_published' => 'Booth published.',
		'item_published_privately' => 'Booth published privately.',
		'item_reverted_to_draft' => 'Booth reverted to draft.',
		'item_scheduled' => 'Booth scheduled.',
		'item_updated' => 'Booth updated.',
		'item_link' => 'Booth Link',
		'item_link_description' => 'A link to a booth.',
	),
	'public' => true,
	'show_in_rest' => true,
	'menu_icon' => 'dashicons-store',
	'supports' => array(
		0 => 'title',
	),
	'delete_with_user' => false,
) );
} );

