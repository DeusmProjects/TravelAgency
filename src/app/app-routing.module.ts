import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import {ToursComponent} from './tours/tours.component';
import {CitiesComponent} from './cities/cities.component';
import {InfoComponent} from './info/info.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tours', component: ToursComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'info', component: InfoComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
