/*
 *
 */
/*jslint browser: true*/

define([

  'jquery',
  'underscore',
  'models/base.model',
  'logger'

], function($, _, BaseModel, Logger) {
  'use strict';

  var className = 'UserModel';

  var UserModel = BaseModel.extend({

    className: className,
    initialize: function() {
      this._super('initialize');
    }
  });

  return UserModel;
});