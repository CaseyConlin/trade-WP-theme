<?php


add_theme_support( 'custom-header', array(
 'video' => true,
 'custom-logo' => true
    
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

function enqueue_load_fa() {
    wp_enqueue_style( 'load-fa', 'https://use.fontawesome.com/releases/v5.5.0/css/all.css' );
  }
  
  add_action( 'wp_enqueue_scripts', 'enqueue_load_fa');
  

function wpdocs_theme_name_scripts() {
	wp_enqueue_style( 'style', get_stylesheet_uri() );
	wp_enqueue_script( 'script-name', get_template_directory_uri() . '/js/trade-theme.js', array(), false, true);
}

add_action( 'wp_enqueue_scripts', 'wpdocs_theme_name_scripts' );

function hook_header_js() {
	wp_enqueue_script( 'script-name', get_template_directory_uri() . '/js/trade-theme.js');
}

add_action( 'wp_footer', 'hook_header_js' );
