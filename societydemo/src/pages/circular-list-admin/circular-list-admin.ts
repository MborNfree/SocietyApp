import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CircularDetailAdminPage } from '../circular-detail-admin/circular-detail-admin';

/**
 * Generated class for the CircularListAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-circular-list-admin',
  templateUrl: 'circular-list-admin.html',
})
export class CircularListAdminPage {
  public items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CircularListAdminPage');
    this.items = [
      {title: ' Circular 1', description: ' To give permission for registering society within Co-operative Housing Societies.',icon:'assets/doctor.jpg'},
      {title: ' Circular 2', description: ' Circular On Housing Society Management',icon:'assets/holi.jpg'},
      {title: ' Circular 3', description: ' Circular On Housing Society Management',icon:'assets/independence day.png'},
      {title: ' Circular 4', description: ' Circular On Housing Society Management',icon:'assets/christmas.png'}
    ];
  }
     saveItem(item){
       this.items.push(item);
     }
     viewItem(){
      this.navCtrl.push(CircularDetailAdminPage);
    }
}
