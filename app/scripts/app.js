/*
 *
 */
/*jslint browser: true*/

define([

  'logger',
  'backbone.marionette',
  'init/init.controller'

], function(

  Logger, 
  Marionette, 
  InitController

  ) {
  'use strict';

  var logger = Logger.get('App');

  var App = new Marionette.Application();

  window.App = App; // <--- Make Global

  var initController = new InitController(this);
    initController.bindTo(initController, 'init:complete', function() {
    logger.info('------------------------');
    logger.info('Initialization complete.');
    logger.info('------------------------');
  });

  // Marionette Initialization stuff.
  App.addInitializer(function() {
    logger.info('"initializer"');
    // Do not handle async operations here.
  });

  // Before initialization
  App.on('initialize:before', function() {
    logger.info('"initialize:before"');
  });

  // After initializers
  App.on('initialize:after', function() {
    logger.info('"initialize:after"');
  });

  // After, after initializers
  App.on('start', function() {
    logger.info('"application:start"');
  });

  return App;
});