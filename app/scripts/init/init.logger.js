/*
 *
 */
/*jslint browser: true*/

define([

  'logger',
  'backbone.marionette'

], function(

  Logger,
  Marionette

  ) {
  'use strict';

  return Marionette.Controller.extend({

    initialize: function(resolver) {
      
      Logger.useDefaults();

      var logger = Logger.get('InitLogger');
      logger.warn('-------------------------------------------------');
      logger.warn('There should be no console logs before this line.');
      logger.warn('-------------------------------------------------');
      logger.info('Init');

      resolver.resolve();
    }
  });
});