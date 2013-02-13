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

  var logger = Logger.get('InitBackbone');

  var addSuperClassCall = function(obj) {
    obj.prototype._super = function(funcName){
      return this.constructor.__super__[funcName].apply(this, _.rest(arguments));
    };
  };

  var InitBackbone = Backbone.Marionette.Controller.extend({
    initialize: function(callback) {
      logger.info('Init');

      addSuperClassCall(Backbone.Model);
      addSuperClassCall(Backbone.Collection);
      addSuperClassCall(Backbone.View);
      addSuperClassCall(Backbone.Marionette.ItemView);

      callback();
    }
  });

  return InitBackbone;
});