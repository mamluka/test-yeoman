/* jslint browser: true */

define([
  'jquery',
  'app',
  'routes/router',
  'logger'

], function($, App, router, Logger) {
  'use strict';

  $(function() {

    var logger = Logger.get('Main');

    logger.info('Start App');

    App.Router = router;
    App.start();

  });
  
});