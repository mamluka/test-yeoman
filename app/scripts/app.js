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

  // After initializers
  App.on('initialize:after', function() {
    logger.info('"initialize:after"');
    logger.info('-----------------------');

    // ****************************************************
    // Blocking initialization routine for async operations
    // ****************************************************

    var onSuccess = function() {
      logger.info('Initialization success.');

      // Continue with post-initialization routines
      startApplication();
    };

    var onFailure = function() {
      logger.info('Initialization failure.');
      logger.info('-----------------------');

      // TODO : [RKP] : Handle initialization failure
    };

    var startApplication = function() {
      logger.info('Initialization started.');
      logger.info('-----------------------');

      // Start Backbone history
      logger.info('Starting Backbone');
      Backbone.history.start({
        pushState: false
      });
    };

    var initController = new InitController();
    initController.listenTo(initController, 'init:complete', onSuccess, onFailure);

  });
  
  return App;
});