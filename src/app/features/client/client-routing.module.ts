import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ClientFormComponent} from "./client-form/client-form.component";

export const routes: Routes = [
  {
    path: '',
    component: ClientFormComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {}
