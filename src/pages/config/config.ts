import { Component, OnInit, Input } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-config',
  templateUrl: 'config.html'
})
export class ConfigPage implements OnInit {

  @Input('token') token: string = null;

  constructor(private storage: Storage) {
  }

  ngOnInit(): void {

    // Or to get a key/value pair
    this.storage.get('token').then((val) => {
      this.token = val;
    });
  }

  saveToken(): void {
    this.storage.set('token', this.token);
  }

}
