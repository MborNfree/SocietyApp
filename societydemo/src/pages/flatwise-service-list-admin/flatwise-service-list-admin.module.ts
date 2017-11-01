import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlatwiseServiceListAdminPage } from './flatwise-service-list-admin';

@NgModule({
  declarations: [
    FlatwiseServiceListAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(FlatwiseServiceListAdminPage),
  ],
})
export class FlatwiseServiceListAdminPageModule {}
