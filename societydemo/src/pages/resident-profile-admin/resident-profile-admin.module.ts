import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ResidentProfileAdminPage } from "./resident-profile-admin";

@NgModule({
  declarations: [ResidentProfileAdminPage],
  imports: [IonicPageModule.forChild(ResidentProfileAdminPage)]
})
export class ResidentProfileAdminPageModule {}
