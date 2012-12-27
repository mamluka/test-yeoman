'use strict';
/*
 * The configuration file for require.js holds all dependency declarations for
 * the application. This is the first file, that will be loaded by require.js
 * and it holds a reference to the main.js file, that starts the app itself.
 */
require.config({

  baseUrl: '/scripts',
  // deps holds dependencies to load as soon as require is defined.
  deps: [ 'main', 'backbone.marionette.handlebars' ],

  // Paths that contain the various different javascript files.
  paths: {

    'plugins': 'vendor/plugins',

    // Components paths.
    'components'              : '../components',
    'jquery'                  : '../components/jquery/jquery',
    'jquery.cookie'           : '../components/jquery.cookie/jquery.cookie',
    'underscore'              : '../components/lodash/lodash',
    'backbone'                : '../components/backbone/backbone',
    'backbone.wreqr'          : '../components/backbone.wreqr/lib/backbone.wreqr',
    'backbone.eventbinder'    : '../components/backbone.eventbinder/lib/backbone.eventbinder',
    'backbone.babysitter'     : '../components/backbone.babysitter/lib/backbone.babysitter',
    'handlebars'              : '../components/handlebars/handlebars-10.0.0-rc.1',

    // Vendor paths.
    'logger'                           : 'vendor/logger',
    'backbone.marionette'              : 'vendor/backbone.marionette',
    'backbone.marionette.handlebars'   : 'vendor/backbone.marionette.handlebars'
  },

  /*
   * Configure the dependencies and exports for older, traditional
   * "browser globals" scripts that do not use define() to declare the
   * dependencies and set a module value.
   */
  shim: {
    // Backbone depends on both jquery and underscore. Backbone is available
    // as the 'Backbone' object in the window namespace.
    'backbone': {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    'backbone.marionette': {
      deps: ['backbone'],
      exports: 'Marionette'
    }
  }

});