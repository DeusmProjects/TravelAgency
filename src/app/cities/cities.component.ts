import { Component, OnInit } from '@angular/core';
import { CitiesService } from './cities.service';
import {City} from './city';

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

  constructor(private httpService: CitiesService) { }

  ngOnInit() {
    this.httpService
      .get('http://localhost:5000/cities')
      .subscribe(result => this.cities = result);
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
    this.cityModel.name = this.cities.find(city => city.id == id).name;
    this.cityModel.id = id;
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
