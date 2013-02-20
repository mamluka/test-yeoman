require.config({

  paths: {

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
    'backbone.marionette' : 'vendor/backbone/backbone.marionette'
  },

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

require([
  'logger',
  'jquery',
  'app',
  'routes/router'

], function(

  Logger, 
  $, 
  App, 
  router

  ) {
  'use strict';

  $(function() {

    var logger = Logger.get('Main');

    logger.info('Start App');

    App.Router = router;
    App.start();

  });
  
});