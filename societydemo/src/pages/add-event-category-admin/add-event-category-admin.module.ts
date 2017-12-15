import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEventCategoryAdminPage } from './add-event-category-admin';

@NgModule({
  declarations: [
    AddEventCategoryAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(AddEventCategoryAdminPage),
  ],
})
export class AddEventCategoryAdminPageModule {}
