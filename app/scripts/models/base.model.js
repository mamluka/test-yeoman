define([

  'logger',
  'backbone'

], function(

  Logger, 
  Backbone

  ) {

  'use strict';

  var className = 'BaseModel';

  return Backbone.Model.extend({

      className: className,

      initialize: function() {
        this.logger = Logger.get(this.className);
        this.logger.info('initialize');
      }
    }
  );
  
});