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
  'modules/models.module'

], function($, _, Backbone, Marionette, Logger, ModelsModule) {
  'use strict';

  var logger = Logger.get('InitLayout');

  var InitLayout = Backbone.Marionette.Controller.extend({
    initialize: function(callback) {

      logger.info('Init');

      var App = window.App;

      var WelcomeView = Backbone.Marionette.ItemView.extend({
        template: "#welcome-template",
        className: 'welcome'
      });

      var userModel = ModelsModule.userModel;

      console.log(ModelsModule);
      
      console.log(userModel);
      var welcomeView = new WelcomeView({
        model: userModel
      });

      var mainRegion = Marionette.Region.extend({
        el:  "#main"
      });

      App.addRegions({
        mainRegion: mainRegion
      });

      App.mainRegion.show(welcomeView);

      callback();
    }
  });

  return InitLayout;
});