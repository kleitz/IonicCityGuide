import { RegisterPage } from './../register/register';
import { SignPage } from './../sign/sign';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginBtnPressed() {
    this.navCtrl.push(SignPage);

  }

  registerBtnPressed() {
    this.navCtrl.push(RegisterPage);
  }

}
