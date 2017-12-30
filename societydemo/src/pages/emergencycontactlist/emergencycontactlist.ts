import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";
import { CallNumber } from "@ionic-native/call-number";
import { EmailComposer } from "@ionic-native/email-composer";
import { InAppBrowser } from "@ionic-native/in-app-browser";

@IonicPage()
@Component({
  selector: "page-emergencycontactlist",
  templateUrl: "emergencycontactlist.html"
})
export class EmergencycontactlistPage {

  email: any;
  contacts = [];
  arrData = [];
  public items = [];
  shownGroup = null;


  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  isGroupShown(group) {
    return this.shownGroup === group;
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private emailComposer: EmailComposer,
    private callNumber: CallNumber,
    private fdb: AngularFireDatabase,
    public iab:InAppBrowser,
  ) {
    this.fdb
      .list("/emerg_contact/")
      .valueChanges()
      .subscribe(_data => {
        this.contacts = _data;
        console.log(this.contacts);
      });
  }

  launchDialer(n: string) {
    this.callNumber
      .callNumber(n, true)
      .then(() => console.log("Launched dialer!"))
      .catch(() => console.log("Error launching dialer"));
  }

  sendemail(emailid) {
    this.emailComposer.isAvailable().then((available: boolean) => {
      if (available) {
        //Now we know we can send
      }
    });
  }

  gotoweb(web) {
   // alert(web);
    const browser = this.iab.create("http://"+web,'_blank');
  }
}
