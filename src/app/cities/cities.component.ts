import { Component, OnInit } from '@angular/core';
import { CitiesService } from './cities.service';
import {City} from '../models/city';
import {Router} from "@angular/router";
import {AuthCookie} from "../auth_cookie";

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.less'],
  providers: [CitiesService]
})
export class CitiesComponent implements OnInit {

  cities: City[] = [];

  cityModel: City = new City();
  isUpdate: boolean = false;

  constructor(private httpService: CitiesService, private router : Router, private cookies : AuthCookie) { }

  ngOnInit() {
    this.httpService
      .get('http://localhost:5000/cities/' + this.cookies.getAuth())
      .subscribe(result => {
        if (result) {
          this.cities = result;
        } else {
          this.router.navigate(['/']);
        }
      });
  }

  deleteCity(id: number) {
    const index = this.cities.findIndex(city => city.id === id);

    if (index !== -1) {
      this.cities.splice(index, 1);
      this.httpService
        .delete(`http://localhost:5000/cities/delete`, id)
        .subscribe();
    }
  }

  updateCity() {
    const index = this.cities.findIndex(city => city.id === this.cityModel.id);

    if (index !== -1) {
      this.cities[index] = this.cityModel;
      this.httpService
        .put(`http://localhost:5000/cities/update`, this.cityModel)
        .subscribe(result => {
          this.cityModel = new City();
          this.isUpdate = false;
        });
    }
  }

  startUpdate(id: number) {
    this.isUpdate = true;
    this.cityModel = JSON.parse(JSON.stringify(this.cities.find(city => city.id === id)));
  }

  addCity() {
    console.log(this.cityModel);
    this.httpService
      .post('http://localhost:5000/cities/add',this.cityModel)
      .subscribe(result => {
        this.cityModel = new City();
        this.cities.push(result);
      });
  }
}
