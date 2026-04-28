<?php
/**
 * Plugin Name:       WP Expo Plan
 * Description:       Interactive map to show expo plans
 * Plugin URI:        https://github.com/Dantolos/wp_expo_map
 * Version:           1.1.15
 * Author:            Aaron Giaimo
 * Author URI:        https://github.com/Dantolos
 * Text Domain:       expo-plan
 *
 * @package           aa-expo-plan
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

define( 'EXPO_PLAN_VERSION', '1.1.14' );

require_once( __DIR__ . '/build/render.php' );
require_once( __DIR__ . '/acf/booth.posttype.acf.php' );
require_once( __DIR__ . '/acf/booth.fields.acf.php' );

function expo_plan_expo_plan_block_init() {
    register_block_type(
        __DIR__ . '/build',
        array(
            'render_callback' => 'expo_plan_expo_plan_render_block_content',
        )
    );
}
add_action( 'init', 'expo_plan_expo_plan_block_init' );

// Cache-Buster: Versionsnummer auf alle Plugin-Scripts und Styles anwenden
add_filter( 'script_loader_src', 'expo_plan_cache_bust', 10, 2 );
add_filter( 'style_loader_src',  'expo_plan_cache_bust', 10, 2 );

function expo_plan_cache_bust( $src, $handle ) {
    // Nur eigene Plugin-Scripts anfassen
    if ( strpos( $handle, 'aa-expo-plan' ) !== false ) {
        $src = add_query_arg( 'v', EXPO_PLAN_VERSION, $src );
    }
    return $src;
}
