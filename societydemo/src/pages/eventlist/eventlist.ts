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


  public items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
   }

   openModal(characterNum) {

        let modal = this.modalCtrl.create( characterNum);
        modal.present();
      }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EventlistPage');
    this.items = [
      {title: 'Diwali', description: 'test1',icon:'assets/diwali.jpg'},
      {title: 'Holi', description: 'test2',icon:'assets/holi.jpg'},
      {title: 'Independence day', description: 'test3',icon:'assets/independence day.png'},
      {title: 'Chritmas', description: 'test3',icon:'assets/christmas.png'}
    ];
  }

  Event(){
    this.navCtrl.push(EventdetailsPage);
  }

  viewItem(item){
    this.navCtrl.push(EventdetailsPage, {
      item: item
    });
  }
}
