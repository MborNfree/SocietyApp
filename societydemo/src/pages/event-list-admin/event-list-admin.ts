import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventAdminPage } from '../event-admin/event-admin';

/**
 * Generated class for the EventListAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-list-admin',
  templateUrl: 'event-list-admin.html',
})
export class EventListAdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventListAdminPage');
  }
  EventDetailPage(){
    this.navCtrl.push(EventAdminPage);
  }
}
