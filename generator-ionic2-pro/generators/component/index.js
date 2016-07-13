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
      message: 'In what folder would you like the component to be created?',
      default: "/app/components"
    }, function(answers) {
      this.props = answers;
      this.log(answers.folder);

      this.prompt({
        type: 'input',
        name: 'name',
        message: 'What will you name the component?',
        default: this.appname+"NewComponent"
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
    htmlTemplate: function () {
            this.fs.copyTpl(
                this.templatePath('example.component.html'),
                this.destinationPath('./app/'+this.props.folder.replace('/app/', '')+'/'+this.props.name+'/'+this.props.name+'.html'), {
                    name: this.props.name,
                    capitalized: capitalizeFirstLetter(this.props.name),
                    uppercase: this.props.name.toUpperCase(),
                    lowercase: this.props.name.toLowerCase(),
                    nameCapitalized: capitalizeFirstLetter(this.props.name),
                    nameUppercase: this.props.name.toUpperCase(),
                    nameLowercase: this.props.name.toLowerCase(),
                    folder: { value: this.props.folder},
                    folderCapitalized: capitalizeFirstLetter(this.props.folder),
                    folderUppercase: this.props.folder.toUpperCase(),
                    folderLowercase: this.props.folder.toLowerCase()
                }
            );
        },
    scssTemplate: function () {
            this.fs.copyTpl(
                this.templatePath('example.component.scss'),
                this.destinationPath('./app/'+this.props.folder.replace('/app/', '')+'/'+this.props.name+'/'+this.props.name+'.scss'), {
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
        },
    tsModel: function () {
      console.log(this.props);
            this.fs.copyTpl(
                this.templatePath('example.model.ts'),
                this.destinationPath('./app/'+this.props.folder.replace('/app/', '')+'/'+this.props.name+'/'+this.props.name+'.component.model.ts'), {
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
        },
    tsTemplate: function () {
            this.fs.copyTpl(
                this.templatePath('example.component.ts'),
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
        },
    appendCSS: function() {
          var path = "./app/theme/app.core.scss",
              file = this.readFileAsString(path);
              file += '\n@import "../'+this.props.folder.replace('/app/', '')+'/'+this.props.name+'/'+this.props.name+'.scss";'

          this.write(path, file);
        }
  }
});