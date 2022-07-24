import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AddressFormComponent} from "./address-form/address-form.component";

export const routes: Routes = [
  {
    path: '',
    component: AddressFormComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressRoutingModule {}
