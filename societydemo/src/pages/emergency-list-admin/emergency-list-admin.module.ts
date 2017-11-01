import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmergencyListAdminPage } from './emergency-list-admin';

@NgModule({
  declarations: [
    EmergencyListAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(EmergencyListAdminPage),
  ],
})
export class EmergencyListAdminPageModule {}
