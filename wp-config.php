<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '6O}Y*gZ @3JlKFy`e_%`y,*D[C%hDfj<vou(|zZ[;ysLeKCj7Ae_*.S88--QAMK_' );
define( 'SECURE_AUTH_KEY',  '049}H>V?;e@.=S_cu!zK#WE/,!B`FrHG#FLAh}Ov/SM4h=>fean&[]tK)`onYfA0' );
define( 'LOGGED_IN_KEY',    'wRY@X=W7!^I%xiH?|$IMXVv%?-~N{oFX8&k0x,Cc<vRJN(Yn<yW;{$}2EA)S89I)' );
define( 'NONCE_KEY',        '#PDtwj^[YJHyezMf{=X7%P2(=I~P_wk,|,^UUA<kG@@v07+}9a=ES}~]pJb8]a y' );
define( 'AUTH_SALT',        '?y|oPIe/#T!WG[VBusWPY>qr}AjIzY9z7^kF()J@mm8Ds&B|9#Y?F!D!@>&A%!<C' );
define( 'SECURE_AUTH_SALT', 'xh0kIJr)$27)<CT<#h0=|L>]_$x3u?+dq[Pv/#(yrA[f!%mx5p2GNG?MfrnjO.`E' );
define( 'LOGGED_IN_SALT',   'E vqxgg]TQ,kn[Sws2[d3)#:4$]C70Ue=$=)Wo8)[qwi&)qE8&L2vrk8gt?Kz}~6' );
define( 'NONCE_SALT',       'gvuvs3qoJP(~Aznl NO5r^ k0nrj|mF5N?2c{boO0oD*Y0T!oXm_`N+7J7VoABRL' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
