'use strict';
/*
 * The configuration file for require.js holds all dependency declarations for
 * the application. This is the first file, that will be loaded by require.js
 * and it holds a reference to the main.js file, that starts the app itself.
 */
require.config({

  // baseUrl: '/scripts',
  // deps holds dependencies to load as soon as require is defined.
  // deps: [ 'main' ],

  // Paths that contain the various different javascript files.
  paths: {

    // 'models.module' : 'modules/models.module',
    // 'layout.module' : 'modules/layout.module',

    // Vendor paths.
    'hm': 'vendor/hm',
    'esprima': 'vendor/esprima',
    'logger' : 'vendor/logger',
    'json2' : 'vendor/json2',
    'when' : 'vendor/when',
    'sequence' : 'vendor/when/sequence',
    'jquery' : 'vendor/jquery',
    'jquery.cookie' : 'vendor/jquery/jquery.cookie',
    'underscore' : 'vendor/lodash',
    'backbone' : 'vendor/backbone',
    'backbone.wreqr' : 'vendor/backbone/backbone.wreqr',
    'backbone.eventbinder' : 'vendor/backbone/backbone.eventbinder',
    'backbone.babysitter' : 'vendor/backbone/backbone.babysitter',
    'backbone.marionette' : 'vendor/backbone/backbone.marionette',
  },

  /*
   * Configure the dependencies and exports for older, traditional
   * "browser globals" scripts that do not use define() to declare the
   * dependencies and set a module value.
   */
  shim: {
    'backbone': {
      deps: [ 'jquery', 'underscore' ],
      exports: 'Backbone'
    },
    'backbone.marionette': {
      deps: [ 'backbone' ],
      exports: 'Marionette'
    }
  }

});