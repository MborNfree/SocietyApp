import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserDocumentListAdminPage } from './user-document-list-admin';

@NgModule({
  declarations: [
    UserDocumentListAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(UserDocumentListAdminPage),
  ],
})
export class UserDocumentListAdminPageModule {}
