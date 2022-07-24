import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientComponent} from './client/client.component';
import {SingleClientRoutingModule} from "./single-client-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CommonModule,
    SingleClientRoutingModule,
    MatCardModule,
    MatListModule
  ]
})
export class SingleClientModule { }
