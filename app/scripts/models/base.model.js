/*
 *
 */
/*jslint browser: true*/

define([

  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'logger'

], function($, _, Backbone, Marionette, Logger) {
  'use strict';

  var className = 'BaseModel';

  var BaseModel = Backbone.Model.extend(
    {
      className: className,
      initialize: function() {
        this.logger = Logger.get(this.className);
        this.logger.info('initialize');
      }
    }
  );

  return BaseModel;
});