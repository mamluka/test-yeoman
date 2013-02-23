define([

  'logger',
  'backbone.marionette',
  'backbone.marionette.handlebars',
  'modules/user/user.model',
  'modules/user/user.view.welcome',
  'hbs!modules/user/user.template',

], function(

  Logger, 
  Marionette, 
  MarionetteHandlebars, 
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
        }),
        template: {
          type: 'handlebars',
          template: userTpl
        }
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