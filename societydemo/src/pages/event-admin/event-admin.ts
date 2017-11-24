import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventListAdminPage } from '../event-list-admin/event-list-admin';

/**
 * Generated class for the EventAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-admin',
  templateUrl: 'event-admin.html',
})
export class EventAdminPage {
  title;
  description;

  public itemsParam;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemsParam = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventAdminPage');
    // this.title = this.navParams.get('item').title;
    // this.description = this.navParams.get('item').description;
  }
  EventDetailPage(){
    this.navCtrl.push(EventListAdminPage);
  }
}
