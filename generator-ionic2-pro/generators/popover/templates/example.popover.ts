import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  template: `
    <ion-list>
      <ion-list-header>Example Popover</ion-list-header>
      <ion-item>
        <h2>Popover Page</h2>
      </ion-item>      
    </ion-list>
  `
})
export class <%= capitalized %> {
  constructor(private viewCtrl: ViewController, private params: NavParams) {

  }
  close() {
    this.viewCtrl.dismiss();
  }
}