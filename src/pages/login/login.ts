import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public translateModule: TranslateModule) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage')
  }

  go() {
    console.log('hello')
    this.navCtrl.push('HomePage')
  }

}
