import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Hero }    from './<%= name %>.component.model';

@Component({
  selector: 'hero-form',
  templateUrl: '<%= folder.value %>/<%= name %>.component.html'
})

export class <%= capitalized %>Component {
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}