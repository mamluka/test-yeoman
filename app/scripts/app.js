/* 
 * 
 */
/*jslint browser: true*/

define([

  // Libraries.
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'logger'

], function($, _, Backbone, Marionette, Logger) {
  'use strict';

  Logger.useDefaults();

  var App = new Marionette.Application();
  
  App.root = '/';

  // Add the main region, that will hold the page layout.
  App.addRegions({
    regionMain: '#main'
  });

  // Adds any methods to be run after the app was initialized.
  App.addInitializer(function() {
    this.initAppLayout();
  });

  // Start backbone's history for hash navigation after the app was initialized.
  App.on('initialize:after', function() {
    Backbone.history.start({
      pushState: true,
      root: App.root
    });
  });

  App.initAppLayout = function() {
    Logger.info('>>>>>>>>>>>>>>>>>>>>');
  };

  // Returns the app object to be available to other modules through require.js.
  return App;
});

define([
  'underscore',
  'backbone',
  'backbone.marionette',
  'backbone.marionette.handlebars'
], function (_, Backbone, Marionette, MarionetteHandlebars) {
  'use strict';

  var TestView = Backbone.Marionette.ItemView.extend({

  });

  return TestView;

});