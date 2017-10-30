import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BillAdminPage } from './bill-admin';

@NgModule({
  declarations: [
    BillAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(BillAdminPage),
  ],
})
export class BillAdminPageModule {}
