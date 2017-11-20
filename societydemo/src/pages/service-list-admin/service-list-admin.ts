import { ServiceDetailAdminPage } from './../service-detail-admin/service-detail-admin';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the ServiceListAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service-list-admin',
  templateUrl: 'service-list-admin.html',
})
export class ServiceListAdminPage {
  public items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase) {
    this.fdb.list("/services/").valueChanges().subscribe(_data => {
      this.items = _data;
     console.log(this.items);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceListAdminPage');
    this.items = [
      {title: 'Diwali', description: 'test1',icon:'assets/diwali.jpg'},
      {title: 'Holi', description: 'test2',icon:'assets/holi.jpg'},
      {title: 'Independence day', description: 'test3',icon:'assets/independence day.png'},
      {title: 'Chritmas', description: 'test3',icon:'assets/christmas.png'}
    ];
  }

  viewItem(item){
    this.navCtrl.push(ServiceDetailAdminPage, {
      item: item
    });
  }

  removeService(eventId: string){
    alert(eventId);
       // this.events.remove(events);
        this.fdb.object('/services/' + eventId).remove();
      }

      updateService(EventId, EventTitle){
        this.fdb.object('/services/' + EventId)
        .update({ event_name: EventTitle});

      }


}
