/*
 *
 */
/*jslint browser: true*/

define([

  'logger',
  'nimble',
  'backbone',
  'backbone.marionette',
  'init/init.logger',
  'init/init.templates',
  'init/init.backbone',
  'init/init.models',
  'init/init.layout'

], function(
  Logger,
  Nimble,
  Backbone,
  Marionette,
  InitLogger,
  InitTemplates,
  InitBackbone,
  InitModels,
  InitLayout
  ) {
  'use strict';

  var logger = Logger.get('Init');

  var getInitializer = function(ModuleClass, index) {
    return function(callback) {
      new ModuleClass(callback);
    };
  };

  var InitController = Backbone.Marionette.Controller.extend({
    initialize: function(app) {

      var self = this;

      var modules = [
        InitLogger,
        InitTemplates,
        InitBackbone,
        InitModels,
        InitLayout
      ];

      var initializers = $.map(modules, getInitializer);

      var onComplete = function() {

        logger.info('Start Backbone');

        Backbone.history.start({
          pushState: true
        });

        self.trigger('init:complete');
      };

      Nimble.series(initializers, onComplete);
    }
  });

  return InitController;
});