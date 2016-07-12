import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/account/<%= lowercase %>/<%= capitalized %>.html'
})

export class <%= capitalized %> {
  constructor(private navController: NavController) {
  }
}
