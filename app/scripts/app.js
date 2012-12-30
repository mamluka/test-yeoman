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
  'models/user.model',
  'models/base.model'

], function($, _, Backbone, Marionette, Logger, UserModel, BaseModel) {
  'use strict';

  Logger.useDefaults();

  var addSuperClassCall = function(obj) {
    obj.prototype._super = function(funcName){
      return this.constructor.__super__[funcName].apply(this, _.rest(arguments));
    };
  };

  addSuperClassCall(Backbone.Model);
  addSuperClassCall(Backbone.Collection);
  addSuperClassCall(Backbone.View);
  addSuperClassCall(Backbone.Marionette.ItemView);

  var App = new Marionette.Application();

  App.logger = Logger.get( 'App' );

  // Before initialization
  App.on('initialize:before', function() {
    this.logger.info('initialize:before');
    
    this.root = '/';

  });

  // Initialization
  App.addInitializer(function() {
    this.initModels();
    this.initLayout();

    // How does Marionette know when these are complete?

  });

  App.initModels = function() {
    this.logger.info('Init App Models');

    // var UserModel = Backbone.Model.extend({});

    this.Models = {};

    this.Models.userModel = new UserModel({
      firstName: 'Johnny',
      lastName: 'Turbo'
    });

  };

  App.initLayout = function() {
    this.logger.info('Init App Layout');

    var WelcomeView = Backbone.Marionette.ItemView.extend({
      template: "#welcome-template",
      className: 'welcome'
    });

    var userModel = this.Models.userModel;
    var welcomeView = new WelcomeView({
      model: userModel
    });

    var mainRegion = Marionette.Region.extend({
      el:  "#main"
    });

    this.addRegions({
        mainRegion: mainRegion
    });

    this.logger.info('baseModel', new BaseModel({}));
    this.logger.info('userModel', userModel);
    this.logger.info('welcomeView', welcomeView);

    this.mainRegion.show(welcomeView);
  };

  // After initializers
  App.on('initialize:after', function() {
    this.logger.info('initialize:after');

    this.startBackbone();
  });

  App.startBackbone = function() {
    this.logger.info('Start Backbone');

    Backbone.history.start({
      pushState: true,
      root: App.root
    });
  };

  // After, after initializers
  App.on('start', function() {
    this.logger.info('start');
  });

  return App;
});