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
  'modules/models.module'

], function($, _, Backbone, Marionette, Logger, ModelsModule) {
  'use strict';

  var logger = Logger.get('InitModels');

  var loadConfig = function(onSuccess, onFailure) {
    logger.info('Load Config');

    $.getJSON('data/config.json')
    .success(function(data) {
      logger.info('Load Config : Success');
      logger.info(data);
      onSuccess(data);
    }).error(function(error) {
      logger.info('Load Config : Failure');
      logger.info(error);
      onFailure(error);
    });
  };

  var InitModels = Backbone.Marionette.Controller.extend({
    initialize: function(callback) {

      logger.info('Init');

      var modelsModule = new ModelsModule();

      loadConfig(function(data) {
        callback();
      }, function() {
        callback();
      });
    }
  });

  return InitModels;
});