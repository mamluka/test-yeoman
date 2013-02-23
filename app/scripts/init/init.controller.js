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

  return Marionette.Controller.extend({

    initialize: function() {

      var self = this;

      var onComplete = function() {

        logger.info('---------------------------------');
        logger.info('Dependent initialization success.');
        logger.info('---------------------------------');

        self.trigger('init:complete');
      };

      var onFailure = function(reason) {

        logger.info('---------------------------------');
        logger.info('Dependent initialization failure.');
        logger.info(reason);
        logger.info('---------------------------------');

        self.trigger('init:failure');
      };

      // List of modules to initialize
      var modules = [
        InitLogger,
        InitTemplates,
        InitBackbone,
        InitModels,
        InitLayout
      ];

      var initializers = $.map(modules, function (ModuleClass, index) {

        return function() {

          var deffered = when.defer();
          var promise = deffered.promise
          var resolver = deffered.resolver

          new ModuleClass(resolver);

          return promise;
        };

      });

      sequence(initializers).then(onComplete, onFailure);
    }

  });
});