import { LoginPage } from '../login/login';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

const _IS_LOGIN = "is_logged";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController,public modalCtrl:ModalController, public nativeStorage: NativeStorage) {

    this.nativeStorage.getItem(_IS_LOGIN).then(
      data => {
        if (data !== true) {
          let modal = this.modalCtrl.create(LoginPage);
          modal.present();
        }
      },
      error => {
        let modal = this.modalCtrl.create(LoginPage);
        modal.present();
      }
    )
  }

}
