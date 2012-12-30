/* 
 * The controller is a collection of methods that correspond
 * to routes and are called by the application router.
 */
/*jslint browser: true*/

define([

  'app',
  'helpers/session',
  'logger'

], function( App, Session, Logger ) {
  'use strict';

  var logger = Logger.get('Controller');

  return {

    // The main page.
    index: function() {

      logger.info('called index-controller');
    },

    // The login page.
    login: function() {

      logger.info('called login-controller');
    },

    // Redirects to the login screen if the user is not logged in.
    isAuthenticated: function() {
      if (!Session.authenticated()) {
        App.Router.navigate('login', {
          trigger: true
        });
      }
    }
  };
});
