import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BillchargeListAdminPage } from './billcharge-list-admin';

@NgModule({
  declarations: [
    BillchargeListAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(BillchargeListAdminPage),
  ],
})
export class BillchargeListAdminPageModule {}
