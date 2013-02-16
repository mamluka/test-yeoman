/*jslint browser: true*/

define([

  'logger',
  'when',
  'sequence',
  'backbone.marionette',
  'init/init.logger',
  'init/init.templates',
  'init/init.backbone',
  'init/init.models',
  'init/init.layout'

], function(

  Logger,
  when,
  sequence,
  Marionette,
  InitLogger,
  InitTemplates,
  InitBackbone,
  InitModels,
  InitLayout
  
  ) {
  'use strict';

  var logger = Logger.get('Init');

  return Backbone.Marionette.Controller.extend({

    initialize: function(app) {

      var self = this;

      var onComplete = function() {

        logger.info('Complete');

        Backbone.history.start({
          pushState: true
        });

        self.trigger('init:complete');
      };

      var onFailure = function() {

        logger.info('Failure');

        self.trigger('init:failure');
      };

      var getInitializer = function (ModuleClass, index) {

        var deffered = when.defer();
        var promise = deffered.promise
        var resolver = deffered.resolver

        new ModuleClass(resolver);

        return promise;
      };

      var modules = [
        InitLogger,
        InitTemplates,
        InitBackbone,
        InitModels,
        InitLayout
      ];

      var initializers = $.map(modules, getInitializer);

      // sequence(initializers, onComplete, onFailure);
      when.all(initializers, onComplete, onFailure);
    }
  });
});