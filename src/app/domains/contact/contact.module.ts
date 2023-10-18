import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactLayoutComponent } from "./layouts/contact.component";
import { InformationModule } from "./pages/information/information.module";
import { ResellerProgramModule } from "./pages/reseller-program/reseller-program.module";
import { TransportOperatorsModule } from "./pages/transport-operators/transport-operators.module";
import { ContactRoutesModule } from "./contact.route";
import { EmptyLayoutModule } from "src/app/share/layouts/empty-layout/empty-layout.module";
import { CopyrightModule } from "src/app/share/components/copyright/copyright.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [ContactLayoutComponent],
  imports: [
    CommonModule,
    InformationModule,
    ResellerProgramModule,
    TransportOperatorsModule,
    ContactRoutesModule,
    EmptyLayoutModule,
    CopyrightModule,
    RouterModule,
  ],
  exports: [ContactLayoutComponent],
})
export class ContactModule {}
