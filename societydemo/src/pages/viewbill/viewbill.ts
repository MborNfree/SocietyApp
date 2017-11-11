import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { Printer, PrintOptions } from '@ionic-native/printer';

@IonicPage()
@Component({
  selector: 'page-viewbill',
  templateUrl: 'viewbill.html',
})
export class ViewbillPage {

  public srNo = [];
  public particulars = [];
  public particularAmt = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public printer: Printer,
              public platform: Platform,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewbillPage');
    this.srNo = [
      {no: '1'},
      {no: '2'},
      {no: '3'}
    ];

    this.particulars = [
      {particular: 'Particular 1'},
      {particular: 'Particular 2'},
      {particular: 'Particular 3'}
    ];

    this.particularAmt = [
      {amount: '100'},
      {amount: '500'},
      {amount: '1000'}
    ];
  }

  print(){

    // this.printer.isAvailable();
    // let options: PrintOptions = {
    //   name: 'Balance Sheet',
    //   duplex: true,
    //   landscape: true,
    //   grayscale: true
    // };
    // var page = document.getElementById('balanceSheet');
    // this.printer.print(page, options);

    if(this.platform.is('android')){
      if(this.printer.isAvailable())
      {
        let options: PrintOptions = {
          name: 'Bill Report',
          duplex: true,
          landscape: true,
          grayscale: true
        };
        var page = document.getElementById('billReport');
        this.printer.print(page, options);
      }
      else{
        this.alert('Please connect your device to a printer!');
      }
    }
    else{
      this.alert('You are on a web browser!');
    }
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
}
