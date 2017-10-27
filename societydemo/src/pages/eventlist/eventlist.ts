import { EventdetailsPage } from './../eventdetails/eventdetails';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the EventlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventlist',
  templateUrl: 'eventlist.html',
})
export class EventlistPage {




  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
   }

   openModal(characterNum) {
    
        let modal = this.modalCtrl.create( characterNum);
        modal.present();
      }


  ionViewDidLoad() {      
    console.log('ionViewDidLoad EventlistPage');
  }

  Event(){
    this.navCtrl.push(EventdetailsPage);
  }
}
