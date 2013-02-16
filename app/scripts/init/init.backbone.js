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

  var logger = Logger.get('InitBackbone');

  var addSuperClassCall = function(obj) {
    obj.prototype._super = function(funcName){
      return this.constructor.__super__[funcName].apply(this, _.rest(arguments));
    };
  };

  return Backbone.Marionette.Controller.extend({
    
    initialize: function(resolver) {
      logger.info('Init');

      addSuperClassCall(Backbone.Model);
      addSuperClassCall(Backbone.Collection);
      addSuperClassCall(Backbone.View);
      addSuperClassCall(Backbone.Marionette.ItemView);

      resolver.resolve();
    }
  });
});