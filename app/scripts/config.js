require.config({

  baseUrl: 'scripts',

  deps: [ 
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
    
    ,
    
    'json2': {
      deps: [ ],
      exports: 'json2'
    }

    ,

    'handlebars': {
      deps: [ ],
      exports: 'handlebars'
    }

  },

  inlineText: true,

  pragmasOnSave: {
    //removes Handlebars.Parser code (used to compile template strings) set
    //it to `false` if you need to parse template strings even after build
    excludeHbsParser : true,
    // kills the entire plugin set once it's built.
    excludeHbs: true,
    // removes i18n precompiler, handlebars and json2
    excludeAfterBuild: true
  },

  locale: "en_us",

  // default plugin settings, listing here just as a reference
  hbs : {
    templateExtension : 'hbs',
    // if disableI18n is `true` it won't load locales and the i18n helper
    // won't work as well.
    disableI18n : true
  },

  callback: function(o) {
    try {
      console.log('ok');
    } catch(e) {
      /* No console */
    }
  }

});