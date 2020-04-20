import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QRCodeModule } from 'angularx-qrcode';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    QRCodeModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
