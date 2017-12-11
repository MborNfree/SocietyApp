import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";
import { CallNumber } from "@ionic-native/call-number";
import { EmailComposer } from "@ionic-native/email-composer";
<<<<<<< HEAD
=======
import { InAppBrowser } from "@ionic-native/in-app-browser";
>>>>>>> e91eeddc69c5af8102519d0002b730cff52323d8

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
  isGroupShown(group) {
    return this.shownGroup === group;
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private emailComposer: EmailComposer,
    private callNumber: CallNumber,
    private fdb: AngularFireDatabase
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
<<<<<<< HEAD

    alert(emailid);
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

  ionViewDidLoad() {
    console.log("ionViewDidLoad EmergencycontactlistPage");
=======
  }

  gotoweb(web) {
    alert(web);
    const browser = this.iab.create(web, "_blank", "location:yes");
>>>>>>> e91eeddc69c5af8102519d0002b730cff52323d8
  }
}
