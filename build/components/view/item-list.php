<?php 
 

function ItemList($items) {
     $itemList = ''; 
     $itemList .= '<div class="expomap-itemlist hidden-itemlist">';
     foreach($items as $item ) {  
          $itemID = $item['id'];
		$selectedContentID = isset( $item['selectedContent'] ) ? $item['selectedContent'] : null;
          $itemTitle = 'Titel Platzhalter';
          if($selectedContentID ){ 
               //var_dump( get_field( 'exhibitor', $selectedContentID  ) );
               $itemTitle = get_the_title( $selectedContentID ) ?: 'Titel Platzhalter';
          }
		$itemList .= '<div class="expomap-list-item" data-boothid="'.$item['id'].'" data-content="'.$selectedContentID.'">';
               $itemList .= '<p>';     
                    $itemList .= '<span class="expomap-item-nr">'.$item['nr'].'</span>';
                    $itemList .= $itemTitle;
               $itemList .= '</p>';
          $itemList .= '</div>';
	}
     $itemList .= '</div>';
     return $itemList;
}