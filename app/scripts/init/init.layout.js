/*
 *
 */
/*jslint browser: true*/

define([

  'logger',
  'backbone.marionette',
  'modules/models.module'

], function(

  Logger,
  Marionette, 
  ModelsModule

  ) {
  'use strict';

  var logger = Logger.get('InitLayout');

  return Marionette.Controller.extend({

    initialize: function(resolver) {

      // NOTE : [RKP] : Circular dependency here, so can't use as param
      var App = require('app');

      logger.info('Init');

      var WelcomeView = Marionette.ItemView.extend({
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
});