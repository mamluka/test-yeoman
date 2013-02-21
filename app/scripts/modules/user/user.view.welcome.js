define([

  'logger',
  'backbone.marionette'

], function(

  Logger, 
  Marionette

  ) {

  'use strict';

  return Marionette.ItemView.extend({
    template: "#welcome-template",
    className: 'welcome'
  });
  
});