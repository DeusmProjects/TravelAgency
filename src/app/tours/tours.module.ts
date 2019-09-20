import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToursComponent} from './tours.component';
import {RouterModule, Routes} from '@angular/router';

export const ROUTES: Routes = [
  { path: '', component: ToursComponent }
];

@NgModule({
  declarations: [
    ToursComponent
  ],
  imports: [
    RouterModule.forChild(ROUTES),
    // CommonModule
  ]
})
export class ToursModule { }
