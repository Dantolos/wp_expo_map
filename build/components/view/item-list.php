<?php

function ItemList($items) {
    $itemList = '';
    $itemList .= '<div class="expomap-itemlist hidden-itemlist">';

    // ← Suchfeld neu
    $itemList .= '
        <div class="expomap-search-wrapper">
            <input
                type="text"
                id="expomap-search"
                class="expomap-search-input"
                placeholder="Suchen..."
                autocomplete="off"
            />
        </div>
    ';

    $lastItem = '';
    foreach( $items as $item ) {
        $itemID = $item['id'];
        $selectedContentID = isset( $item['selectedContent'] ) ? $item['selectedContent'] : null;
        $itemTitle = 'Titel Platzhalter';

        if( $lastItem != $item["type"] ) {
            $lastItem = $item["type"];
            $typeLabels = [
                'Booth'   => 'Aussteller',
                'Zone'    => 'Zone',
                'Info'    => 'Info',
                'Arena'   => 'Arena',
                'Sessions' => 'Session Rooms',
            ];
            $typetitle = $typeLabels[$item["type"]] ?? $item["type"];
            $itemList .= '<div class="expomap-list-type-separator" data-separator="'.$typetitle.'"><span>'.$typetitle.'</span></div>';
        }

        if( $selectedContentID ) {
            $itemTitle = get_the_title( $selectedContentID ) ?: 'Titel Platzhalter';
            $itemList .= '<div class="expomap-list-item" data-boothid="'.$item['id'].'" data-content="'.$selectedContentID.'" data-title="'.esc_attr(strtolower($itemTitle)).'">';
            	$itemList .= '<div class="expomap-item-nr">'.preg_replace('/\D/', '', $item['nr']).'</div>';
                $itemList .= '<div class="expomap-item-title">';
                    $itemList .= '<p>'.$itemTitle.'</p>';
                $itemList .= '</div>';
            $itemList .= '</div>';
        }
    }

    $itemList .= '</div>';
    return $itemList;
}
