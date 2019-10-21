import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CitiesComponent} from './cities.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule} from "@angular/forms";

export const ROUTES: Routes = [
  { path: '', component: CitiesComponent }
];

@NgModule({
  declarations: [
    CitiesComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    RouterModule.forChild(ROUTES),
    FormsModule
  ]
})
export class CitiesModule { }
