<?php 

function MapMenu($menuItems) {
     $mapMenu = '';
     $mapMenu .= '<div class="expomap-mapmenu-container">';
     foreach( $menuItems as $menuItem ){
          $mapMenu .= MapMenuItem($menuItem);
     }
     $mapMenu .= '</div>';
     return $mapMenu;
}

function MapMenuItem($menuItemData){
     $mapMenuItem = '';
     $mapMenuItem.= '<div class="expomap-menu-item" data-label="'.$menuItemData['label'].'">';
          $mapMenuItem .= file_get_contents( $menuItemData['icon'] );
     $mapMenuItem.= '</div>';
     return $mapMenuItem;
}