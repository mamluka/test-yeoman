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

    index: function() {
      logger.info('index');
    },
    
    login: function() {
      logger.info('login');
    },

    default: function() {
      logger.info('default');
      App.Router.navigate('', {
          trigger: true
      });
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
