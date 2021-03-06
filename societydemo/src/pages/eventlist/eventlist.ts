import { EventdetailsPage } from './../eventdetails/eventdetails';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-eventlist',
  templateUrl: 'eventlist.html',
})
export class EventlistPage {
  addNewQuestionSetForm: any;

  public items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private fdb: AngularFireDatabase) {
    this.fdb.list("/events/").valueChanges().subscribe(_data => {
      this.items = _data;
      console.log(this.items);
    });

  }
  openModal(characterNum) {
    let modal = this.modalCtrl.create(characterNum);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventlistPage');
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  Event() {
    this.navCtrl.push(EventdetailsPage);
  }

  viewItem(item) {
    this.navCtrl.push(EventdetailsPage, {
      item: item
    });
  }
}
