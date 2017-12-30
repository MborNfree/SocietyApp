import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";

// import { AngularFireAuth } from 'angularfire2/auth';
import { SMS } from "@ionic-native/sms";
import { EmailComposer } from '@ionic-native/email-composer';


@IonicPage()
@Component({
  selector: "page-memberprofile",
  templateUrl: "memberprofile.html"
})
export class MemberprofilePage {
  users: {}[];
  public itemsParam;
  //Text object
  text = {
    number: "",
    message: ""
  };
  SMS: any;
  phonenumber: number;
  textmessage: string;
  email: any;

  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private fdb: AngularFireDatabase,
    private sms: SMS,
    private emailComposer: EmailComposer
  ) {
    this.fdb
      .list("/users/")
      .valueChanges()
      .subscribe(_data => {
        this.users = _data;
        console.log(this.users);
      });
    this.itemsParam = navParams.get("item");
  }
  sendSms(cnt: number) {
   // alert(cnt);
    var data = cnt ;
   // var data ={ message: "hello world", contact: cnt };
    var modalPage = this.modalCtrl.create("SendSmsModalPage", { data: data });
    modalPage.present();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad MemberprofilePage");
  }

  sendemail(emailid) {
    this.emailComposer.isAvailable().then((available: boolean) => {
      if (available) {
        //Now we know we can send
      }
    });

    //alert(emailid);
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
}
