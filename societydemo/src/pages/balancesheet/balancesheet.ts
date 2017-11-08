import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BalancesheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-balancesheet',
  templateUrl: 'balancesheet.html',
})
export class BalancesheetPage {

  public currentAssets = [];
  public currentAssetsAmt = [];
  public otherAssets = [];
  public otherAssetsAmt = [];
  public currentLiabilities = [];
  public currentLiabilitiesAmt = [];
  public otherLiabilities = [];
  public otherLiabilitiesAmt = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BalancesheetPage');
    this.currentAssets = [
      {currentAsset: 'Cash and Cash equivalents'},
      {currentAsset: 'Short-term investments'},
      {currentAsset: 'Accounts receivable'},
      {currentAsset: 'Inventories'},
      {currentAsset: 'Deferred income taxes'},
      {currentAsset: 'Prepaid expenses and other current assets'},
    ];

    this.currentAssetsAmt = [
      {currentAssetAmt: '$373.00'},
      {currentAssetAmt: '$373.00'},
      {currentAssetAmt: '$373.00'},
      {currentAssetAmt: '$373.00'},
      {currentAssetAmt: '$373.00'}
    ];
    this.otherAssets = [
      {otherAsset: 'Property, plant and equipment at cost'},
      {otherAsset: 'Less accumulated depreciation'},
      {otherAsset: 'Property, plant and equipment(net)'},
      {otherAsset: 'Long term cash investements'},
      {otherAsset: 'Equity investements'},
      {otherAsset: 'Deferred income taxes'},
      {otherAsset: 'Other assets'}
    ];
    this.otherAssetsAmt = [
      {otherAssetAmt: '$373.00'},
      {otherAssetAmt: '$373.00'},
      {otherAssetAmt: '$373.00'},
      {otherAssetAmt: '$373.00'}
    ];
    this.currentLiabilities = [
      {currentLiability: 'Loans payabale and current portion long-term debt'},
      {currentLiability: 'Accounts payable and accrued expenses'},
      {currentLiability: 'Income taxes payable'},
      {currentLiability: 'Accrued retirement and profit-sharing contributions'}
    ];
    this.currentLiabilitiesAmt = [
      {currentLiabilityAmt: '$373.00'},
      {currentLiabilityAmt: '$373.00'},
      {currentLiabilityAmt: '$373.00'},
      {currentLiabilityAmt: '$373.00'}
    ];
    this.otherLiabilities = [
      {otherLiability: 'Long-term debt'},
      {otherLiability: 'Accrued retirement costs'},
      {otherLiability: 'Deferred income taxes'},
      {otherLiability: 'Deferred credits and other liabilities'}
    ];
    this.otherLiabilitiesAmt = [
      {otherLiabilityAmt: '$373.00'},
      {otherLiabilityAmt: '$373.00'},
      {otherLiabilityAmt: '$373.00'},
      {otherLiabilityAmt: '$373.00'}
    ];
  }

}
