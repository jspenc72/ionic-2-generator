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
      message: 'Enter Resource Name (MyResource)',
      default: this.appname + "MyResource"
    }, function(answers) {
      this.props = answers
	    done();
    }.bind(this));
  },
  //Writing Logic here
  writing: {
    tsTemplate: function () {
            this.fs.copyTpl(
                this.templatePath('model.ts'),
                this.destinationPath('./app/resources/'+this.props.name+'/'+this.props.name+'.ts'), {
                    name: this.props.name,
                    capitalized: capitalizeFirstLetter(this.props.name),
                    uppercase: this.props.name.toUpperCase(),
                    lowercase: this.props.name.toLowerCase()
                }
            );
        }
  }
});