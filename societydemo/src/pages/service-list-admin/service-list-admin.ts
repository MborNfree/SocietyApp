import { ServiceDetailAdminPage } from "./../service-detail-admin/service-detail-admin";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Observable } from "rxjs/Observable";

/**
 * Generated class for the ServiceListAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-service-list-admin",
  templateUrl: "service-list-admin.html"
})
export class ServiceListAdminPage {

  itemsRef: AngularFireList<any>;
  Services: Observable<any[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fdb: AngularFireDatabase
  ) {

    this.itemsRef = fdb.list("services");
    // Use snapshotChanges().map() to store the key
    this.Services = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ServiceListAdminPage");
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  viewItem(item) {
    this.navCtrl.push(ServiceDetailAdminPage, {
      item: item
    });
  }

  removeService(serviceId: any) {
    alert('Are you sure wated to Delete?');
    this.fdb.object("/services/" + serviceId).remove();
  }

  updateService(serviceId, ServiceTitle) {
    alert(serviceId);
    this.fdb
      .object("/services/" + serviceId)
      .update({ event_name: ServiceTitle });
  }
}
