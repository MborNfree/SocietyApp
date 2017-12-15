import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { UserDocumentDetailAdminPage } from "./../user-document-detail-admin/user-document-detail-admin";
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: "page-user-document-list-admin",
  templateUrl: "user-document-list-admin.html"
})
export class UserDocumentListAdminPage {
  public items : Observable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams,private fdb: AngularFireDatabase) {

    this.items = this.fdb
    .list("/documents/")
    .snapshotChanges()
    .map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad UserDocumentListAdminPage");
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  viewItem(item) {
    this.navCtrl.push(UserDocumentDetailAdminPage, {
      item: item
    });
  }

  removeUdoc(key: string){
    alert('Are you sure wated to Delete?');
    this.fdb.list("/documents/").remove(key);
  }
  updateUdoc(){
    alert('Are you sure wated to Update?');
  }
}
