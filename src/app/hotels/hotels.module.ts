import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HotelsComponent} from './hotels.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule} from "@angular/forms";

export const ROUTES: Routes = [
  { path: '', component: HotelsComponent }
];

@NgModule({
  declarations: [
    HotelsComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    RouterModule.forChild(ROUTES),
    FormsModule
  ]
})
export class HotelsModule { }
