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
      name: 'folder',
      message: 'In what folder would you like the popover to be created?',
      default: "/app/components/popovers"
    }, function(answers) {
      this.props = answers;
      this.log(answers.folder);

      this.prompt({
        type: 'input',
        name: 'name',
        message: 'What will you name the popover?',
        default: this.appname+"NewPopover"
      }, function(answers) {
        this.props.name = answers.name
        this.log(answers.name);

        done();
      }.bind(this));
    }.bind(this));
  },
  //Writing Logic here
  writing: {
    //Copy the template files
    tsTemplate: function () {
            this.fs.copyTpl(
                this.templatePath('example.popover.ts'),
                this.destinationPath('./app/'+this.props.folder.replace('/app/', '')+'/'+this.props.name+'/'+this.props.name+'.ts'), {
                    name: this.props.name,
                    nameCapitalized: capitalizeFirstLetter(this.props.name),
                    nameUppercase: this.props.name.toUpperCase(),
                    nameLowercase: this.props.name.toLowerCase(),
                    capitalized: capitalizeFirstLetter(this.props.name),
                    uppercase: this.props.name.toUpperCase(),
                    lowercase: this.props.name.toLowerCase(),
                    folder: { value: this.props.folder},
                    folderCapitalized: capitalizeFirstLetter(this.props.folder),
                    folderUppercase: this.props.folder.toUpperCase(),
                    folderLowercase: this.props.folder.toLowerCase()
                }
            );
        }
  }
});