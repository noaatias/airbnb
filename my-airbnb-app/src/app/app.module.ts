import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ApartmentComponent } from './apartment/apartment.component';
import {MatCardModule, MatSelectModule, MatToolbarModule,MatFormFieldModule, MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApartmentDetailsComponent } from './apartment-details/apartment-details.component';
import { NewApartmentComponent } from './new-apartment/new-apartment.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { TypeFilterComponent } from './type-filter/type-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    ApartmentsComponent,
    ApartmentComponent,
    ApartmentDetailsComponent,
    NewApartmentComponent,
    TypeFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatSelectModule,
   MatToolbarModule,
   BrowserAnimationsModule,
   FormsModule,
   ReactiveFormsModule,
   MatFormFieldModule,
   MatInputModule,
   MatButtonModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
