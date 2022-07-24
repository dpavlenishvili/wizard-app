import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressFormComponent } from './address-form/address-form.component';
import {AddressRoutingModule} from "./address-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";



@NgModule({
  declarations: [
    AddressFormComponent
  ],
  imports: [
    CommonModule,
    AddressRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class AddressModule { }
