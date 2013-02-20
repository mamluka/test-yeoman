/*
 *
 */
/*jslint browser: true*/

define([

  'logger',
  'underscore',
  'backbone.marionette'

], function(

  Logger,
  _, 
  Marionette 

  ) {
  'use strict';

  return Marionette.Controller.extend({
    
    initialize: function(resolver) {

      Logger.get('InitTemplates').info('Init');

      _.templateSettings = {
        interpolate : /\{\{(.+?)\}\}/g
      };

      resolver.resolve();
    }
  });
});