import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PropertyListAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-property-list-admin',
  templateUrl: 'property-list-admin.html',
})
export class PropertyListAdminPage {
  public items = [];
  public assets = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PropertyListAdminPage');
    this.items = [

      {title: 'Society Office', description: 'test3'}
    ];


    this.assets = [
      {title: 'CCTV', description: 'test1'},
      {title: 'Sofa', description: 'test2'},
      {title: 'Society Office', description: 'test3'}
    ];
  }

}
