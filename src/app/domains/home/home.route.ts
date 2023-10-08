import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserHomeComponent } from "./pages/user-home/user-home.component";

const routes: Routes = [
  {
    path: "",
    component: UserHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutesModule {}
