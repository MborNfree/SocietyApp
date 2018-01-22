import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Http, Headers } from "@angular/http";


@IonicPage()
@Component({
  selector: "page-card",
  templateUrl: "card.html"
})
export class Card {
  cardinfo: any = {
    number: "",
    expMonth: "",
    expYear: "",
    cvc: ""
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,

    public http: Http
  ) { }

  ionViewDidLoad() {
    console.log("ionViewDidLoad Card");
  }


}
