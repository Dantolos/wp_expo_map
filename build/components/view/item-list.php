<?php


function ItemList($items) {
     $itemList = '';
     $itemList .= '<div class="expomap-itemlist hidden-itemlist">';

     $lastItem = '';
     foreach($items as $item ) {
          $itemID = $item['id'];
          //var_dump($item);
          $selectedContentID = isset( $item['selectedContent'] ) ? $item['selectedContent'] : null;
          $itemTitle = 'Titel Platzhalter';

          if($lastItem != $item["type"] ){
               $lastItem = $item["type"];

               $typetitle = ($item["type"] == 'Active') ? 'Arena' : $item["type"];
               $itemList .= '<div class="expomap-list-type-separator"><span>'.$typetitle.'</span></div>';
          }

          if( $selectedContentID ){
               //var_dump( get_field( 'exhibitor', $selectedContentID  ) );
               $itemTitle = get_the_title( $selectedContentID ) ?: 'Titel Platzhalter';
          }
          if( $selectedContentID ){
               $itemList .= '<div class="expomap-list-item" data-boothid="'.$item['id'].'" data-content="'.$selectedContentID.'">';
					$itemList .= '<div class="expomap-item-nr">'.$item['nr'].'</div>';
				     $itemList .= '<div class="expomap-item-title">';
                        $itemList .= '<p>' .$itemTitle.'</p>';
                    $itemList .= '</div>';
               $itemList .= '</div>';
          }
	}
     $itemList .= '</div>';
     return $itemList;
}
