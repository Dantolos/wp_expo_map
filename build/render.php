<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

require_once( __DIR__ . '/components/view/item-list.php' );
require_once( __DIR__ . '/components/view/map-menu.php' );
  

function expo_plan_expo_plan_render_block_content( $attr ) {
	
	$menuData = [
		[ 
			'label' => 'zoom in',
			'icon' => __DIR__.'/assets/add-circle.svg'
		],
		[ 
			'label' => 'zoom out',
			'icon' => __DIR__.'/assets/remove-circle.svg', 
		],
		[ 
			'label' => 'list',
			'icon' => __DIR__.'/assets/list-circle.svg', 
		],
	];


	$svg_map_file =  $attr["mapSVGUrl"] ? file_get_contents(  $attr["mapSVGUrl"] ) : '<h3>No map selected.</h3>';
	//echo($svg_map_file);
	$output = '<div id="expo-plan-wrapper">';
		$output .= ItemList($attr["boothes"]);
		//$output .= MapMenu($menuData);
		//$output .= '<div class="expo-plan-image-container" style="transform:scale('.$attr["mapZoom"].');">' . $svg_map_file . '</div>';
		$output .= '<div id="expo-react-container" data-map="' . $attr["mapSVGUrl"] . '"></div>'; 
	$output .= '</div>';
  
	return $output;
}
