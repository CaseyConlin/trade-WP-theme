<?php


add_theme_support( 'custom-header', array(
 'video' => true,    
) ); 

add_filter( 'header_video_settings', 'my_header_video_settings');

function my_header_video_settings( $settings ) {
    $settings['minWidth'] =  0;
    $settings['minHeight'] = 0;
    $settings['l10n'] = array(
        'pause'      => __( '' ),
        'play'       => __( '' ),
        'pauseSpeak' => __( 'Video stopped.'),
        'playSpeak'  => __( 'Video started.'),
      );

    return $settings;
}


function themename_custom_logo_setup() {
	$defaults = array(
		'height'               => 100,
		'width'                => 400,
		'flex-height'          => true,
		'flex-width'           => true,
		'header-text'          => array( 'site-title', 'site-description' ),
		'unlink-homepage-logo' => true, 
	);

	add_theme_support( 'custom-logo', $defaults );
}

  add_action( 'after_setup_theme', 'themename_custom_logo_setup' );



function enqueue_load_fa() {
    wp_enqueue_style( 'load-fa', 'https://use.fontawesome.com/releases/v5.5.0/css/all.css' );
  }

  add_action( 'wp_enqueue_scripts', 'enqueue_load_fa');
  



function wpdocs_theme_name_scripts() {
	wp_enqueue_style( 'style', get_stylesheet_uri() );
	// wp_enqueue_script( 'script-name', get_template_directory_uri() . '/js/trade-theme.js', array(), false, true);
  
}

  add_action( 'wp_enqueue_scripts', 'wpdocs_theme_name_scripts' );

  function enqueue_webpack_scripts() {
  
    $cssFilePath = glob( get_template_directory() . '/css/build/main.min.*.css' );
    $cssFileURI = get_template_directory_uri() . '/css/build/' . basename($cssFilePath[0]);
    wp_enqueue_style( 'main_css', $cssFileURI );
    
    $jsFilePath = glob( get_template_directory() . '/js/build/main.min.*.js' );
    $jsFileURI = get_template_directory_uri() . '/js/build/' . basename($jsFilePath[0]);
    wp_enqueue_script( 'main_js', $jsFileURI , null , null , true );
      
  }
  add_action( 'wp_enqueue_scripts', 'enqueue_webpack_scripts' );



function trade_theme_top_menu() {
  register_nav_menu('top-menu', ( 'Top Menu' ));
}

  add_action( 'init', 'trade_theme_top_menu' );



function register_navwalker(){
	require_once get_template_directory() . '/class-wp-bootstrap-navwalker.php';
}

add_action( 'after_setup_theme', 'register_navwalker' );

add_filter( 'nav_menu_link_attributes', 'prefix_bs5_dropdown_data_attribute', 20, 3 );
/**
 * Use namespaced data attribute for Bootstrap's dropdown toggles.
 *
 * @param array    $atts HTML attributes applied to the item's `<a>` element.
 * @param WP_Post  $item The current menu item.
 * @param stdClass $args An object of wp_nav_menu() arguments.
 * @return array
 */
function prefix_bs5_dropdown_data_attribute( $atts, $item, $args ) {
    if ( is_a( $args->walker, 'WP_Bootstrap_Navwalker' ) ) {
        if ( array_key_exists( 'data-toggle', $atts ) ) {
            unset( $atts['data-toggle'] );
            $atts['data-bs-toggle'] = 'dropdown';
        }
    }
    return $atts;
}

