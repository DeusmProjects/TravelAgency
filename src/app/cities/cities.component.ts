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

  constructor(private httpService: CitiesService) { }

  ngOnInit() {
    this.httpService
      .get('http://localhost:5000/cities')
      .subscribe(result => this.cities = result);
  }

}
