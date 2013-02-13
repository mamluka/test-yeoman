/*
 *
 */
/*jslint browser: true*/

define([

  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'logger',
  'init/init.controller',
  'models/user.model',
  'models/base.model'

], function($, _, Backbone, Marionette, Logger, InitController, UserModel, BaseModel) {
  'use strict';

  var logger = Logger.get('App');

  var App = new Marionette.Application();

  window.App = App; // <--- Make Global

  var initController = new InitController(this);
    initController.bindTo(initController, 'init:complete', function(){
    logger.info('------------------------');
    logger.info('Initialization complete.');
    logger.info('------------------------');
  });

  // Marionette Initialization stuff.
  App.addInitializer(function() {
    logger.info('"initializer"');
    // How does Marionette know when these are complete?
    // It doesn't.
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