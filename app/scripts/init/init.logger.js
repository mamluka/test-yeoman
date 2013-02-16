/*
 *
 */
/*jslint browser: true*/

define([

  'logger',
  'when',
  'backbone',
  'backbone.marionette'

], function(

  Logger, 
  when, 
  Backbone, 
  Marionette

  ) {
  'use strict';

  return Backbone.Marionette.Controller.extend({

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