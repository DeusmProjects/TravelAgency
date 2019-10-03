import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CitiesComponent} from './cities.component';

export const ROUTES: Routes = [
  { path: '', component: CitiesComponent }
];

@NgModule({
  declarations: [
    CitiesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class CitiesModule { }
