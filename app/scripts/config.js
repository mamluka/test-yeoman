require.config({

  baseUrl: 'scripts',

  deps: [ 
    // 'hbs', /* need Handlebars loader */
    'main' /* main.js loads next */
  ],

  paths: {

    /* vendor */
    'logger' : 'vendor/logger',
    /* components */
    'when' : 'vendor/components/when/when',
    'sequence' : 'vendor/components/when/sequence',
    'jquery' : 'vendor/components/jquery/jquery',
    'jquery.cookie' : 'vendor/components/jquery.cookie/jquery.cookie',
    'underscore' : 'vendor/components/lodash/dist/lodash',
    'backbone' : 'vendor/components/backbone/backbone',
    'backbone.wreqr' : 'vendor/components/backbone.wreqr/lib/amd/backbone.wreqr',
    'backbone.babysitter' : 'vendor/components/backbone.babysitter/lib/amd/backbone.babysitter',
    'backbone.marionette' : 'vendor/components/backbone.marionette/lib/core/amd/backbone.marionette',
    'backbone.marionette.handlebars' : 'vendor/components/backbone.marionette.handlebars/backbone.marionette.handlebars',
    /* Note : [RKP] : This Require plugin seems to require its own set of dependencies */
    'hbs' : 'vendor/components/require-handlebars-plugin/hbs',
    // 'handlebars' : 'vendor/components/handlebars/handlebars',
    'handlebars' : 'vendor/components/require-handlebars-plugin/Handlebars',
    'json2' : 'vendor/components/require-handlebars-plugin/hbs/json2',
    'i18nprecompile' : 'vendor/components/require-handlebars-plugin/hbs/i18nprecompile'

  },

  shim: {

    'backbone': {
      deps: [ 'jquery', 'underscore' ],
      exports: 'Backbone'
    }

  },

  // pragmasOnSave: {
  //   //removes Handlebars.Parser code (used to compile template strings) set
  //   //it to `false` if you need to parse template strings even after build
  //   excludeHbsParser : true,
  //   // kills the entire plugin set once it's built.
  //   excludeHbs: true,
  //   // removes i18n precompiler, handlebars and json2
  //   excludeAfterBuild: true
  // },

  hbs : {
    templateExtension : 'hbs',
    disableI18n : true
  },

  callback: function(o) {
    try {
      console.log('1');
    } catch(e) {
      /* No console */
    }
  }

});