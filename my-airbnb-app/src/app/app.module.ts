import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ApartmentComponent } from './apartment/apartment.component';
import {MatCardModule, MatSelectModule, MatToolbarModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    ApartmentsComponent,
    ApartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatSelectModule,
   MatToolbarModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
