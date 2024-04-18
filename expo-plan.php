<?php
/**

 * Plugin Name:       WP Expo Plan
 * Description:       Interactive map to show expo plans
 * Plugin URI:        https://github.com/Dantolos/wp_expo_map
 * Version:           1.0.5
 * Author:            Aaron Giaimo
 * Author URI:        https://github.com/Dantolos
 * Text Domain:       expo-plan 
 *
 *
 * @package           aa-expo-plan
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

require_once(__DIR__ . '/build/render.php');
 
require_once(__DIR__ . '/acf/booth.posttype.acf.php'); // ACF Postype
require_once(__DIR__ . '/acf/booth.fields.acf.php'); // ACF Fields

function expo_plan_expo_plan_block_init() {
	register_block_type( 
		__DIR__ . '/build',
		array(
			'render_callback' => 'expo_plan_expo_plan_render_block_content'
		)
	);
}
add_action( 'init', 'expo_plan_expo_plan_block_init' );




?>

