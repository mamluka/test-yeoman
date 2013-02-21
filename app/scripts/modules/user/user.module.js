define([

  'logger',
  'backbone.marionette',
  'modules/user/user.model',
  'modules/user/user.view.welcome'

], function(

  Logger, 
  Marionette, 
  UserModel,
  WelcomeView

  ) {

  'use strict';

  var logger = Logger.get('UserModule');

  return Marionette.Controller.extend({

    initialize: function() {

      logger.info('Init');

    },

    welcome: function() {
    
      logger.info('welcome');

      // NOTE : [RKP] : Circular dependency here, so can't use as param
      var App = require('app');

      var welcomeView = new WelcomeView({
        model: new UserModel({
          firstName: 'Super',
          lastName: 'Batman'
        })
      });

      var mainRegion = Marionette.Region.extend({
        el:  "#main"
      });

      App.addRegions({
        mainRegion: mainRegion
      });

      App.mainRegion.show(welcomeView);
    }

  });
});