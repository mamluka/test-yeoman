define([

  'logger',
  'models/base.model'

], function(Logger, BaseModel) {
  
  'use strict';

  var className = 'UserModel';

  return BaseModel.extend({

    className: className,
    
    initialize: function() {
      this._super('initialize');
    }

  });
});