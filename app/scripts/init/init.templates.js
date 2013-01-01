/*
 *
 */
/*jslint browser: true*/

define([

  'underscore',
  'backbone',
  'backbone.marionette',
  'logger'

], function(_, Backbone, Marionette, Logger) {
  'use strict';

  var logger = Logger.get('InitTemplates');

  var InitTemplates = Backbone.Marionette.Controller.extend({
    initialize: function(callback) {

      logger.info('Init');

      _.templateSettings = {
        interpolate : /\{\{(.+?)\}\}/g
      };

      callback();
    }
  });

  return InitTemplates;
});