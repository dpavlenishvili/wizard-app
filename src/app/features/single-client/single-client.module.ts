import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import {SingleClientRoutingModule} from "./single-client-routing.module";



@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CommonModule,
    SingleClientRoutingModule
  ]
})
export class SingleClientModule { }
