import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ResidentListAdminPage } from "./resident-list-admin";

@NgModule({
  declarations: [ResidentListAdminPage],
  imports: [IonicPageModule.forChild(ResidentListAdminPage)]
})
export class ResidentListAdminPageModule {}
