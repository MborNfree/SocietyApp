import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: "page-flatwise-service-list-admin",
  templateUrl: "flatwise-service-list-admin.html"
})
export class FlatwiseServiceListAdminPage {

  items: Observable<any[]>;
  itemsRef: AngularFireList<any>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fdb: AngularFireDatabase
  ) {
      this.items = this.fdb
      .list("/flatwiseservice/")
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });
  }


  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad FlatwiseServiceListAdminPage");
  }
  deleteFlatService(Id:string) {
    alert("deleted");
    this.fdb.list("/flatwiseservice/").remove(Id);
  }
  EditFlatService(key: string, newText: string) {
    alert("edited");
    // this.itemsRef.update(key, { text: newText });
    this.fdb
    .list("/flatwiseservice/").update(key, { flatServiceName: newText });
  }
}
