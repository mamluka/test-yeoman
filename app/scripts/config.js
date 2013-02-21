require.config({

  baseUrl: 'scripts',

  deps: [ 
    'main' /* main.js loads next */
  ],

  paths: {

    /* vendor */
    'logger' : 'vendor/logger',
    /* components */
    'json2' : 'vendor/components/json2/json2',
    'when' : 'vendor/components/when/when',
    'sequence' : 'vendor/components/when/sequence',
    'jquery' : 'vendor/components/jquery/jquery',
    'jquery.cookie' : 'vendor/components/jquery.cookie/jquery.cookie',
    'underscore' : 'vendor/components/lodash/lodash',
    'backbone' : 'vendor/components/backbone/backbone',
    'backbone.wreqr' : 'vendor/components/backbone.wreqr/lib/amd/backbone.wreqr',
    'backbone.babysitter' : 'vendor/components/backbone.babysitter/lib/amd/backbone.babysitter',
    'backbone.marionette' : 'vendor/components/backbone.marionette/lib/core/amd/backbone.marionette'

  },

  shim: {

    'backbone': {
      deps: [ 'jquery', 'underscore' ],
      exports: 'Backbone'
    }

  },

  callback: function(o) {
    try {
      console.log('ok');
    } catch(e) {
      /* No console */
    }
  }

});