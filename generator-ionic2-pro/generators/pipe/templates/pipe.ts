import {Pipe, PipeTransform} from '@angular/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators

@Pipe({
  name: '<%= capitalized %>'
})
export class <%= capitalized %>  implements PipeTransform  {

  // Transform is the new "return function(value, args)" in Angular 1.x
  transform(value, args?) {
    // ES6 array destructuring

    return value.filter(item => {
    	
    	//
    	//Perform filtering here, we return the original list of items by default...
		//
      
      return item
    
    });
  }

}