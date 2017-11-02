import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserDocumentDetailAdminPage } from './user-document-detail-admin';

@NgModule({
  declarations: [
    UserDocumentDetailAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(UserDocumentDetailAdminPage),
  ],
})
export class UserDocumentDetailAdminPageModule {}
