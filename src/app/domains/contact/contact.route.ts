import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactLayoutComponent } from "./layouts/contact.component";
import { InformationComponent } from "./pages/information/information.component";
import { ResellerProgramComponent } from "./pages/reseller-program/reseller-program.component";
import { TransportOperatorsComponent } from "./pages/transport-operators/transport-operators.component";

const routes: Routes = [
  {
    path: "",
    component: ContactLayoutComponent,
    // canActivate: [AuthGuard], TODO
    children: [
      { path: "", redirectTo: "information", pathMatch: "full" },
      { path: "information", component: InformationComponent },
      { path: "reseller-program", component: ResellerProgramComponent },
      { path: "transport-operators", component: TransportOperatorsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutesModule {}
