import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {IdentityFormComponent} from "./identity-form/identity-form.component";

export const routes: Routes = [
  {
    path: '',
    component: IdentityFormComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdentityRoutingModule {}
