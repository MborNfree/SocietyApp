import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddServiceAdminPage } from './add-service-admin';

@NgModule({
  declarations: [
    AddServiceAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(AddServiceAdminPage),
  ],
})
export class AddServiceAdminPageModule {}
