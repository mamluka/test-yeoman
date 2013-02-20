/*
 *
 */
/*jslint browser: true*/

define([

  'logger',
  'jquery',
  'when',
  'backbone.marionette',
  'modules/models.module'

], function(
  
  Logger, 
  $,
  when,
  Marionette, 
  ModelsModule

  ) {
  'use strict';

  var logger = Logger.get('InitModels');

  var loadConfig = function() {
    logger.info('Load Config');

    var promise = $.getJSON('data/config.json');

    when(promise, function(result) {
      logger.info('Load Config : Success');
      logger.info(result);
    }, function(reason) {
      logger.info('Load Config : Failure');
      logger.info(reason);
    });

    return promise;
  };

  return Marionette.Controller.extend({

    initialize: function(resolver) {

      logger.info('Init');

      var promise;
      var promises = [];

      promises.push(loadConfig());

      when.all(promises, function() {
        logger.info('-----------------');
        logger.info('All models ready.');
        logger.info('-----------------');
        resolver.resolve();
      }, function() {
        logger.info('----------------------------');
        logger.info('!!! All models not ready !!!');
        logger.info('----------------------------');
        resolver.reject();
      });
    }

  });
});