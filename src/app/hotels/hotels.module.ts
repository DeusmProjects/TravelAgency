import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HotelsComponent} from './hotels.component';

export const ROUTES: Routes = [
  { path: '', component: HotelsComponent }
];

@NgModule({
  declarations: [
    HotelsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class HotelsModule { }
