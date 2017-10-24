import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectBillPage } from './select-bill';

@NgModule({
  declarations: [
    SelectBillPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectBillPage),
  ],
})
export class SelectBillPageModule {}
