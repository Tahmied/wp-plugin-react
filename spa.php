<?php

/**
 * Plugin Name:       ReacTailwind
 * Plugin URI:        https://tahmied.com
 * Description:       just a test plugin to test react and tailwind 
 * Version:           1.0.0
 * Requires PHP:      6.0
 * Author:            Tahmied Hossain
 * Text Domain:       tahmied
 */

if (!defined('ABSPATH')) exit;

function my_plugin_menu()
{

    $main_page = add_menu_page(
        'My Plugin',
        'My Plugin',
        'manage_options',
        'my-plugin-dashboard',
        'my_plugin_render_app',
        'dashicons-superhero',
        6
    );

    $sub_page = add_submenu_page(
        'my-plugin-dashboard',
        'Settings',
        'Settings',
        'manage_options',
        'my-plugin-settings',
        'my_plugin_render_app'
    );

    add_action('load-' . $main_page, 'my_plugin_enqueue_assets');
    add_action('load-' . $sub_page, 'my_plugin_enqueue_assets');
}
add_action('admin_menu', 'my_plugin_menu');

function my_plugin_enqueue_assets()
{
    $asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');

    wp_enqueue_script(
        'my-plugin-js',
        plugins_url('build/index.js', __FILE__),
        $asset_file['dependencies'],
        $asset_file['version'],
        true
    );

    wp_enqueue_style(
        'my-plugin-css',
        plugins_url('build/index.css', __FILE__),
        array(),
        $asset_file['version']
    );

    $current_screen = get_current_screen();
    wp_localize_script('my-plugin-js', 'myPluginConfig', array(
        'page' => $current_screen->id,
    ));
}

function my_plugin_render_app()
{
    echo '<div id="my-plugin-root"></div>';
}
