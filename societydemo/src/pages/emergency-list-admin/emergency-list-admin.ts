import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";
import { CallNumber } from "@ionic-native/call-number";
import { EmailComposer } from "@ionic-native/email-composer";
import { InAppBrowser } from "@ionic-native/in-app-browser";
/**
 * Generated class for the EmergencyListAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-emergency-list-admin",
  templateUrl: "emergency-list-admin.html"
})
export class EmergencyListAdminPage {
  email: any;

  contacts = [];
  arrData = [];
  public items = [];
  shownGroup = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private callNumber: CallNumber,
    private fdb: AngularFireDatabase,
    public iab:InAppBrowser,
    private emailComposer: EmailComposer
  ) {
    this.fdb
      .list("/emerg_contact/")
      .valueChanges()
      .subscribe(_data => {
        this.contacts = _data;
        console.log(this.contacts);
      });
  }
  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  }
  isGroupShown(group) {
    return this.shownGroup === group;
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

   // alert(emailid);
    let email = {
      to: emailid,
      cc: "",

      attachments: [
        "file://img/logo.png",
        "res://icon.png",
        "base64:icon.png//iVBORw0KGgoAAAANSUhEUg",
        "file://README.pdf"
      ],
      subject: "Test Mail",
      body: "This is Test mail",
      isHtml: true
    };

    // Send a text message using default options
    this.emailComposer.open(email);
    // add alias
    this.email.addAlias("gmail", "com.google.android.gm");

    // then use alias when sending email
    this.email.open({
      app: "gmail"
    });
  }

  gotoweb(web) {
   // alert(web);
    const browser = this.iab.create("http://"+web,'_blank');
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad EmergencyListAdminPage");
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
