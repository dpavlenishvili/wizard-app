import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentityFormComponent } from './identity-form/identity-form.component';
import {IdentityRoutingModule} from "./identity-routing.module";



@NgModule({
  declarations: [
    IdentityFormComponent
  ],
  imports: [
    CommonModule,
    IdentityRoutingModule
  ]
})
export class IdentityModule { }
