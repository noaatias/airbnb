import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { ApartmentDetailsComponent } from './apartment-details/apartment-details.component';
import { NewApartmentComponent } from './new-apartment/new-apartment.component';


const routes: Routes = [
  {path: 'apartments', component: ApartmentsComponent},
  {path: 'apartments/new', component: NewApartmentComponent},
  {path: 'apartments/:id', component: ApartmentDetailsComponent},
  {path: '**', redirectTo: 'apartments'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}