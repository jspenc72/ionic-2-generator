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
      message: 'Enter Model Name (MyModel)',
      default: this.appname + "MyModel"
    }, function(answers) {
      this.props = answers
      console.log(this.props.name);
	    this.prompt({
	      type: 'input',
	      name: 'attributes',
	      message: 'Enter Comma Separated list of Attributes public:title:String, count:Number',
	      default: "public:title:string,public:name:string,public:info:string"
	    }, function(answers) {
	      this.props.attributes = []

	    	var attrsArr = answers.attributes.split(',')
	    	for(var i=0; i<attrsArr.length; i++){
	    		var attr = {
	    			declaration: '',
	    			name: '',
	    			type: ''
	    		}
	    		var attrArr = attrsArr[i].split(":");
	    		console.log(attrArr)
	    		if(attrArr.length==3){
	    			attr.declaration = attrArr[0];
	    			attr.name = attrArr[1];
	    			attr.type = attrArr[2];
	    		}else if(attrArr.length==2){
	    			attr.name = attrArr[0];
	    			attr.type = attrArr[1];
	    		}else{
	    			//Invalid user input throw error...
	    		}
	    		console.log(attr);
	    		this.props.attributes.push(attr);
	    	}
	    	console.log(this.props.attributes)
	      done();
	    }.bind(this));
      
    }.bind(this));
  },
  //Writing Logic here
  writing: {
    tsTemplate: function () {
            this.fs.copyTpl(
                this.templatePath('model.ts'),
                this.destinationPath('./app/models/'+this.props.name+'/'+this.props.name+'.ts'), {
                    name: this.props.name,
                    capitalized: capitalizeFirstLetter(this.props.name),
                    uppercase: this.props.name.toUpperCase(),
                    lowercase: this.props.name.toLowerCase(),
                    attributes: this.props.attributes
                }
            );
        }
  }
});