import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { TotalVoiceServiceProvider } from '../../providers/total-voice-service';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @Input('from') from: string = null;
  @Input('to') to: string = null;

  constructor(public navCtrl: NavController,
    private storage: Storage,
    private totalVoiceService: TotalVoiceServiceProvider,
    private alertCtrl: AlertController) {

  }

  send(): void {

    this.storage.get('token').then((token) => {

      if (token === undefined || token === null) {
        this.showAlert("Attention", "Token not existent!");
      }

      if (this.from == '' || this.to == '') {
        this.showAlert("Attention", "Fill in fields From and To.");
      }

      this.totalVoiceService.send(token, this.from, this.to)
        .subscribe(resp => { this.showAlert("Success", "Sent with success") });

    });

  }


  showAlert(title: string, subTitle: string) {

    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['Ok']
    });
    alert.present();
  }

}
