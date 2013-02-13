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
  'models/user.model'

], function($, _, Backbone, Marionette, Logger, UserModel) {
  'use strict';

  var logger = Logger.get('ModelsModule');

  var ModelsModule = Backbone.Marionette.Controller.extend({
    initialize: function() {
      logger.info('Init');

      this.userModel = new UserModel({
        firstName: 'Johnny',
        lastName: 'Turbo'
      });
    }
  });

  return ModelsModule;
});