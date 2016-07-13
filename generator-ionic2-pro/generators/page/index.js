var generators = require('yeoman-generator');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

module.exports = generators.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);

    // Next, add your custom code
    this.option('coffee'); // This method adds support for a `--coffee` flag
  },
  //Ask for user input
  prompting: function() {
    var done = this.async();
    this.prompt({
      type: 'input',
      name: 'name',
      message: 'What would you like to call your page?',
      //Defaults to the project's folder name if the input is skipped
      default: this.appname + "NewPage"
    }, function(answers) {
      this.props = answers
      this.log(answers.name);

      done();
    }.bind(this));
  },
  //Writing Logic here
  writing: {
    //Copy the template files
    htmlTemplate: function () {
            this.fs.copyTpl(
                this.templatePath('page.html'),
                this.destinationPath('./app/pages/'+this.props.name+'/'+this.props.name+'.html'), {
                    name: this.props.name,
                    capitalized: capitalizeFirstLetter(this.props.name),
                    uppercase: this.props.name.toUpperCase(),
                    lowercase: this.props.name.toLowerCase()
                }
            );
        },
    scssTemplate: function () {
            this.fs.copyTpl(
                this.templatePath('page.scss'),
                this.destinationPath('./app/pages/'+this.props.name+'/'+this.props.name+'.scss'), {
                    name: this.props.name,
                    capitalized: capitalizeFirstLetter(this.props.name),
                    uppercase: this.props.name.toUpperCase(),
                    lowercase: this.props.name.toLowerCase()
                }
            );
        },
    tsTemplate: function () {
            this.fs.copyTpl(
                this.templatePath('page.ts'),
                this.destinationPath('./app/pages/'+this.props.name+'/'+this.props.name+'.ts'), {
                    name: this.props.name,
                    capitalized: capitalizeFirstLetter(this.props.name),
                    uppercase: this.props.name.toUpperCase(),
                    lowercase: this.props.name.toLowerCase()
                }
            );
        },
    jsTemplate: function () {
            this.fs.copyTpl(
                this.templatePath('page.js'),
                this.destinationPath('./app/pages/'+this.props.name+'/'+this.props.name+'.js'), {
                    name: this.props.name,
                    capitalized: capitalizeFirstLetter(this.props.name),
                    uppercase: this.props.name.toUpperCase(),
                    lowercase: this.props.name.toLowerCase()
                }
            );
        },
    appendCSS: function() {
          var path = "./app/theme/app.core.scss",
              file = this.readFileAsString(path);
              file += '\n@import "../pages/'+this.props.name+'/'+this.props.name+'";'
          /* make modifications to the file string here */

          this.write(path, file);
        }
  }
});