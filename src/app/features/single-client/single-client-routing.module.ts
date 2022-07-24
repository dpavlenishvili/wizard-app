import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ClientComponent} from "./client/client.component";
import {SingleResolver} from "./single-client.resolver";

export const routes: Routes = [
  {
    path: '',
    resolve: {
      singleClient: SingleResolver
    },
    component: ClientComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleClientRoutingModule {}
