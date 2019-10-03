import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import {CitiesComponent} from './cities/cities.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tours', loadChildren: './tours/tours.module#ToursModule' },
  { path: 'cities', loadChildren: './cities/cities.module#CitiesModule' },
  { path: 'hotels', loadChildren: './hotels/hotels.module#HotelsModule' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
