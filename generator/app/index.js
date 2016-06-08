'use strict';
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var mkdirp = require('mkdirp');
var styleLang;

module.exports = yeoman.generators.Base.extend({

  // Initialize method
  initialize: function(){
    this.pkg = require('../package.json');
  },

  // Prompting before initialize scaffold
  prompting: function () {
    var done = this.async();

    // Have greet the user.
    this.log(yosay(
      'Welcome a ' + chalk.yellow('Kickstarter - Style Guide') + ' the generator that helps you build fast an modern web and mobile apps.'
    ));

    // Questions
    var prompts = [{
      name: 'appName',
      message: 'What is your app\'s name ?',
      default: 'appName',
    },
    {
      type: 'list',
      name: 'styleLang',
      message: 'Which precompiler-language do you want to use?',
      choices: [
        {
          name: 'SCSS',
          value: 'Scss'
        },
        {
          name: 'SASS',
          value: 'sass'
        },
        {
          name: 'less',
          value: 'Less'
        },
        {
          name: 'Stylus',
          value: 'Stylus'
        },
        {
          name: 'None',
          value: 'none'
        }
      ]
    }];

    // Arguments Prompt
    this.prompt(prompts, function (props) {

      this.appName = props.appName;
      styleLang = props.styleLang;

      this.Scss = false;
      this.SASS = false;
      this.Less = false;
      this.Stylus = false;

      function wantsStyleLang(sl) {
        return styleLang && styleLang.indexOf(sl) !== -1;
      }

      // Styles
      this.Scss   = wantsStyleLang('Scss');
      this.SASS   = wantsStyleLang('SASS');
      this.Less   = wantsStyleLang('Less');
      this.Stylus = wantsStyleLang('Stylus');

      done();
    }.bind(this));
  },

  writing: {

    // packageJSON
    packageJSON: function () {
      this.template('_package.json', 'package.json');
    },

    // App Context
    app: function () {
      var context = {
          Scss: this.Scss,
          SASS: this.SASS,
          Less: this.Less,
          Stylus: this.Stylus
      };
      this.template('_bower.json', 'bower.json', context);
    },

    // Files
    projectfiles: function () {

      // Context Files
      var context = {
        appname: this.appName,
        Scss: this.Scss,
        SASS: this.SASS,
        Less: this.Less,
        Stylus: this.Stylus
      };

      // Editor Config
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );

      // JSHint validate u javascript code
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );

      // Bower dependencies
      this.fs.copy(
        this.templatePath('bowerrc'),
        this.destinationPath('.bowerrc')
      );

      // Gulpfile
      this.template('_gulpfile.js', 'gulpfile.js', context);

      // Create directories
      mkdirp('app');
      mkdirp('app/src');

      // Styles
      this.directory(
        this.templatePath('app/_css'),
        this.destinationPath('app/css')
      );

      if (!this.Scss || this.SASS || this.Less || this.Stylus) {
        this.template('app/_css/styles.css', 'app/css/styles.css', context);
      };

      // SCSS
      if (this.Scss) {
        mkdirp('app/src/scss');
        this.template('app/_src/scss', 'app/src/scss', context);
        this.directory(
          this.templatePath('app/_src/scss'),
          this.destinationPath('app/src/scss')
        );
      }

      // SASS
      if (this.SASS) {
        mkdirp('app/src/sass');
        this.template('app/_src/sass', 'app/src/sass', context);
        this.directory(
          this.templatePath('app/_src/_sass'),
          this.destinationPath('app/src/sass')
        );
      }

      // Less
      if (this.Less) {
        mkdirp('app/src/less');
        this.template('app/_src/less', 'app/src/less', context);
        this.directory(
          this.templatePath('app/_src/_less'),
          this.destinationPath('app/src/less')
        );
      }

      // Stylus
      if (this.Stylus) {
        mkdirp('app/src/stylus');
        this.template('app/_src/stylus', 'app/src/stylus', context);
        this.directory(
          this.templatePath('app/_src/stylus'),
          this.destinationPath('app/src/stylus')
        );
      }

      // Images
      this.directory(
        this.templatePath('app/_images'),
        this.destinationPath('app/images')
      );

      // Scripts
      this.template("app/_js/_scripts.js", "app/js/scripts.js", context);

      // HTML
      this.template("app/_index.html", "app/index.html", context);

    },
  },

  // Run command install
  install: function () {

    this.installDependencies({
      skipInstall: this.options['skip-install']
    });

    this.on('end', function () {
      this.log(yosay(
        'Yeah! You\'re all set and done!' +
        ' Now simply run and start coding!'
      ));
      this.spawnCommand('gulp');
    });

  }

});
