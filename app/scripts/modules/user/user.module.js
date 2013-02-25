define([

  'logger'
  , 'backbone.marionette'
  , 'backbone.marionette.handlebars'
  , 'modules/user/user.model'
  , 'modules/user/user.view.welcome'

], function(

  Logger 
  , Marionette
  , MarionetteHandlebars
  , UserModel
  , WelcomeView

  ) {

  'use strict';

  var logger = Logger.get('UserModule');

  return Marionette.Controller.extend({

    initialize: function() {

      logger.info('Init');

      require([

        'app'
        , 'hbs!modules/user/user.template'

      ], function(App, template) {

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

      });

    }

  });
});