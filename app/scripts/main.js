require([
	
  'logger',
  'jquery',
  'app',
  'routes/router'

], function(

  Logger, 
  $, 
  App, 
  router

  ) {
  'use strict';

  $(function() {

    var logger = Logger.get('Main');

    logger.info('Start App');

    App.Router = router;
    App.start();

  });
  
});