import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPropertyAdminPage } from './add-property-admin';

@NgModule({
  declarations: [
    AddPropertyAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPropertyAdminPage),
  ],
})
export class AddPropertyAdminPageModule {}
