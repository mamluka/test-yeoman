/*
 *
 */
/*jslint browser: true*/

define([

  'logger',
  'jquery',
  'underscore',
  'when',
  'backbone',
  'backbone.marionette',
  'modules/models.module'

], function(

  Logger, 
  $, 
  _, 
  when, 
  Backbone, 
  Marionette, 
  ModelsModule

  ) {
  'use strict';

  var logger = Logger.get('InitLayout');

  var InitLayout = Backbone.Marionette.Controller.extend({

    initialize: function(resolver) {

      logger.info('Init');

      var App = window.App;

      var WelcomeView = Backbone.Marionette.ItemView.extend({
        template: "#welcome-template",
        className: 'welcome'
      });

      var userModel = ModelsModule.userModel;

      // logger(ModelsModule);
      // logger(userModel);

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

      resolver.resolve();
    }
  });

  return InitLayout;
});