import { Component, OnInit } from '@angular/core';
import {HotelsService} from "../hotels/hotels.service";
import {Hotel} from "../models/hotel";

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.less'],
  providers: [HotelsService]
})
export class HotelsListComponent implements OnInit {

  hotels: Hotel[] = [];
  search: string = "";

  constructor(private httpService : HotelsService) { }

  ngOnInit() {
    this.httpService
      .get('http://localhost:5000/hotels')
      .subscribe(result => this.hotels = result.hotels);
  }

  changeInput() {
    console.log('search', this.search);

    this.httpService
      .get('http://localhost:5000/hotels/' + this.search)
      .subscribe(result => this.hotels = result.hotels);
  }
}
