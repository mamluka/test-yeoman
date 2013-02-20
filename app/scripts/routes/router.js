/*
 * The router defines routes and their corresponding methods in the controller.
 */
/*jslint browser: true*/
define([

  'backbone.marionette',
  'routes/controller'
  
], function(Marionette, controller) {
  'use strict';

  var Router = Marionette.AppRouter.extend({

    appRoutes: {
      
      '' : 'index',
      'login' : 'login',
      '*default' : 'default'
    }

  });

  return new Router({
    controller: controller
  });

});