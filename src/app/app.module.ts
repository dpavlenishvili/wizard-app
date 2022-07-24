import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StepperComponent} from './components/stepper/stepper.component';
import {RouterModule} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {AppRoutingModule} from "./app-routing.module";
import {NgxsModule} from "@ngxs/store";
import {RootState} from "./_state/state";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatNativeDateModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {NgxsStoragePluginModule} from "@ngxs/storage-plugin";

// export const GRI_DATE_FORMATS: MatDateFormats = {
//   ...MAT_NATIVE_DATE_FORMATS,
//   display: {
//     ...MAT_NATIVE_DATE_FORMATS.display,
//     dateInput: {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric',
//     } as Intl.DateTimeFormatOptions,
//   }
// };

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    NgxsModule.forRoot([RootState]),
    NgxsStoragePluginModule.forRoot(),
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  providers: [
    // {provide: MAT_DATE_FORMATS, useValue: GRI_DATE_FORMATS},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
