import { Component, OnInit } from '@angular/core';
import {HotelsService} from "./hotels.service";
import {Hotel} from "../models/hotel";
import {City} from "../models/city";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.less'],
  providers: [HotelsService]
})
export class HotelsComponent implements OnInit {

  hotels: Hotel[] = [];
  cities: City[] = [];

  hotelModel: Hotel = new Hotel();

  isUpdate: boolean = false;

  constructor(private httpService : HotelsService ) { }

  ngOnInit() {
    this.httpService
      .get()
      .subscribe(result => {
        this.hotels = result.hotels;
        this.cities = result.cities;
      });
  }

  deleteHotel(id: number) {
    const index = this.hotels.findIndex(hotel => hotel.id === id);

    if (index !== -1) {
      this.hotels.splice(index, 1);
      this.httpService
        .delete(id)
        .subscribe();
    }
  }

  startUpdate(id: number) {
    this.isUpdate = true;

    this.hotelModel = JSON.parse(JSON.stringify(this.hotels.find(hotel => hotel.id == id)));
  }

  updateHotel() {
    const index = this.hotels.findIndex(hotel => hotel.id === this.hotelModel.id);

    if (index !== -1) {
      this.hotels[index] = this.hotelModel;
      this.httpService
        .put(this.hotelModel)
        .subscribe(result => {
          this.hotelModel = new Hotel();
          this.isUpdate = false;
        });
    }
  }

  addHotel() {
    this.httpService
      .post(this.hotelModel)
      .subscribe(result => {
        this.hotels.push(result);
        this.hotelModel = new Hotel();
      });
  }
}
