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
    add_menu_page(
        'My Plugin',
        'My Plugin',
        'manage_options',
        'my-plugin-dashboard',
        'my_plugin_render_app',
        'dashicons-superhero',
        6
    );

    add_submenu_page(
        'my-plugin-dashboard',
        'Settings',
        'Settings',
        'manage_options',
        'my-plugin-settings',
        'my_plugin_render_app'
    );
}
add_action('admin_menu', 'my_plugin_menu');

function my_admin_assets($hook)
{

    // load only on your plugin page if you want
    if (strpos($hook, 'my-plugin') === false) {
        return;
    }

    wp_enqueue_script(
        'my-admin',
        plugin_dir_url(__FILE__) . 'build/admin.js',
        [],
        filemtime(plugin_dir_path(__FILE__) . 'build/admin.js'),
        true
    );

    wp_enqueue_style(
        'my-admin',
        plugin_dir_url(__FILE__) . 'build/admin.css',
        [],
        filemtime(plugin_dir_path(__FILE__) . 'build/admin.css')
    );
}
add_action('admin_enqueue_scripts', 'my_admin_assets');

function my_plugin_render_app()
{
    echo '<div id="my-plugin-root"></div>';
}
