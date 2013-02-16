/*
 *
 */
/*jslint browser: true*/

define([

  'logger',
  'underscore',
  'when',
  'backbone',
  'backbone.marionette'

], function(

  Logger,
  _, 
  when, 
  Backbone, 
  Marionette 

  ) {
  'use strict';

  return Backbone.Marionette.Controller.extend({
    
    initialize: function(resolver) {

      Logger.get('InitTemplates').info('Init');

      _.templateSettings = {
        interpolate : /\{\{(.+?)\}\}/g
      };

      resolver.resolve();
    }
  });
});