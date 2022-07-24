import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListRoutingModule} from "./list-routing.module";
import {ListComponent} from "./list/list.component";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    MatTableModule,
    MatIconModule
  ]
})
export class ListModule { }
