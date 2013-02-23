define([

  'logger',
  'backbone.marionette',
  'modules/user/user.module'

], function(

  Logger,
  Marionette, 
  UserModule

  ) {
  'use strict';

  var logger = Logger.get('InitLayout');

  return Marionette.Controller.extend({

    initialize: function(resolver) {

      logger.info('Init');

      // Init User Module for example

      var userModule = new UserModule();
      userModule.welcome();

      resolver.resolve();
    }
  });
});