var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);

    // Next, add your custom code
    this.option('coffee'); // This method adds support for a `--coffee` flag
  },
  info: function () {
    console.log('Use one of the sub generators to create generate items for your project.');
  } 
});