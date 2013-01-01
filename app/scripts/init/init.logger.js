/*
 *
 */
/*jslint browser: true*/

define([

  'backbone',
  'backbone.marionette',
  'logger'

], function(Backbone, Marionette, Logger) {
  'use strict';

  var logger = Logger.get('InitLogger');

  var InitLogger = Backbone.Marionette.Controller.extend({
    initialize: function(callback) {
      
      Logger.useDefaults();

      logger.warn('-------------------------------------------------');
      logger.warn('There should be no console logs before this line.');
      logger.warn('-------------------------------------------------');
      logger.info('Init');

      callback();
    }
  });

  return InitLogger;
});