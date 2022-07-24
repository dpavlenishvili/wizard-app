import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientFormComponent } from './client-form/client-form.component';
import {ClientRoutingModule} from "./client-routing.module";



@NgModule({
  declarations: [
    ClientFormComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
