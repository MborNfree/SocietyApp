import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  ToastController
} from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";

// import { AngularFireAuth } from 'angularfire2/auth';
import { SMS } from "@ionic-native/sms";


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

  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private fdb: AngularFireDatabase,
    private toast: ToastController,
    private sms: SMS
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
    alert(cnt);
    var data = { message: "hello world", contact: cnt };
    var modalPage = this.modalCtrl.create("SendSmsModalPage", { data: data });
    modalPage.present();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad MemberprofilePage");
  }
}
