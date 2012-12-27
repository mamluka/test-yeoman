/* 
 * 
 */
/* jslint browser: true */
define([

  // Libraries.
  'jquery',

  // The application.
  'app',

  // Misc.
  'routes/router',
  'helpers/session'

], function($, App, router, session) {
  'use strict';

  // Use jquery's document ready function to start the app as soon as the DOM
  // was fully loaded.
  $(function() {

    App.Router = router;
    App.start();

  });
  
});