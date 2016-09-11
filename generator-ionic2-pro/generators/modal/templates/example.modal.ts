import {Component} from '@angular/core';
import {ModalController, Platform, NavParams, ViewController} from 'ionic-angular';

@Component({
  templateUrl: './build/pages/modals/basic/modal-content.html'
})
class <%= capitalized %> {

  constructor( public platform: Platform, public params: NavParams, public viewCtrl: ViewController) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}