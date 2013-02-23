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
    'backbone.marionette' : 'vendor/components/backbone.marionette/lib/core/amd/backbone.marionette',
    'backbone.marionette.handlebars' : 'vendor/components/backbone.marionette.handlebars/backbone.marionette.handlebars',
    'hbs' : 'vendor/components/require-handlebars-plugin/hbs',
    'handlebars' : 'vendor/components/handlebars/handlebars',
    'i18nprecompile' : 'vendor/components/require-handlebars-plugin/hbs/i18nprecompile'

  },

  shim: {

    'backbone': {
      deps: [ 'jquery', 'underscore' ],
      exports: 'Backbone'
    }
    
    ,
    
    'json2': {
      exports: 'json2'
    }
    
    ,

    'hbs': {
      deps: [ 'json2' ]
    }

    // 'hbs': {
    //   deps: [ 'handlebars', 'i18nprecompile' ]
    // }

  },

  // inlineText: true,

  // pragmasOnSave: {
  //   //removes Handlebars.Parser code (used to compile template strings) set
  //   //it to `false` if you need to parse template strings even after build
  //   excludeHbsParser : false,
  //   // kills the entire plugin set once it's built.
  //   excludeHbs: false,
  //   // removes i18n precompiler, handlebars and json2
  //   excludeAfterBuild: false
  // },

  // locale: "en_us",

  // // default plugin settings, listing here just as a reference
  // hbs : {
  //   templateExtension : 'hbs',
  //   // if disableI18n is `true` it won't load locales and the i18n helper
  //   // won't work as well.
  //   disableI18n : true
  // },

  callback: function(o) {
    try {
      console.log('ok');
    } catch(e) {
      /* No console */
    }
  }

});