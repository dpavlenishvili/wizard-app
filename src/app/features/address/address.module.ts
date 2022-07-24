import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressFormComponent } from './address-form/address-form.component';
import {AddressRoutingModule} from "./address-routing.module";



@NgModule({
  declarations: [
    AddressFormComponent
  ],
  imports: [
    CommonModule,
    AddressRoutingModule
  ]
})
export class AddressModule { }
