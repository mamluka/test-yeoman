/* 
 * The controller is basically just a collection of methods that correspond
 * to routes and are called by the application router.
 */
/*jslint browser: true*/
define([

  // Application.
  'app',

  // Misc.
  'helpers/session',
  'logger'

], function( App, session, Logger ) {
  'use strict';

  return {

    // The main page.
    index: function() {

      Logger.info('called index-controller');
    },

    // The login page.
    login: function() {

      Logger.info('called login-controller');
    },

    // Redirects to the login screen if the user is not logged in.
    isAuthenticated: function() {
      if (!session.authenticated()) {
        App.Router.navigate('login', {
          trigger: true
        });
      }
    }
  };
  
});
