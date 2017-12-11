import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { GenerateBillAdminPage } from "./generate-bill-admin";

@NgModule({
  declarations: [GenerateBillAdminPage],
  imports: [IonicPageModule.forChild(GenerateBillAdminPage)]
})
export class GenerateBillAdminPageModule {}
