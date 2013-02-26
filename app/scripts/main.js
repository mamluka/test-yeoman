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

    require([

        'backbone.marionette'
        , 'backbone.marionette.handlebars'
        , 'modules/user/user.model'
        , 'modules/user/user.view.welcome'
        , 'hbs!modules/user/user.template'

      ], function(

        Marionette
        , MarionetteHandlebars
        , UserModel
        , WelcomeView
        , template

        ) {

        var welcomeView = new WelcomeView({
          model: new UserModel({
            firstName: 'Super',
            lastName: 'Batman'
          })
          ,
          template: {
            type: 'handlebars',
            template: template
          }
        });

        var mainRegion = Marionette.Region.extend({
          el:  "#main"
        });

        App.addRegions({
          mainRegion: mainRegion
        });

        App.mainRegion.show(welcomeView);

        logger.info('fin');

      });

  });
  
});