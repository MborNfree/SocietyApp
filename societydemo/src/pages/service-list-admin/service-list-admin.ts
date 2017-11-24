import { ServiceDetailAdminPage } from './../service-detail-admin/service-detail-admin';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

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
  itemsRef: AngularFireList<any>;
  itemsObject: Observable<any[]>;


  constructor(public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase) {
    this.fdb.list("/services/").valueChanges().subscribe(_data => {
      this.items = _data;
     console.log(this.items);
    });

    this.itemsRef =fdb.list('messages');
    // Use snapshotChanges().map() to store the key
    this.itemsObject = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
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

  removeService(serviceId: any){

    alert(JSON.stringify(serviceId));
    //this.itemsRef.remove(serviceId);
       // this.events.remove(events);
        this.fdb.object('/services/' + serviceId).remove();
      }

      updateService(serviceId, ServiceTitle){
        alert(serviceId);
        this.fdb.object('/services/' + serviceId)
        .update({ event_name: ServiceTitle});

      }


}
