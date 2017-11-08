import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BalancesheetPage } from './balancesheet';

@NgModule({
  declarations: [
    BalancesheetPage,
  ],
  imports: [
    IonicPageModule.forChild(BalancesheetPage),
  ],
})
export class BalancesheetPageModule {}
