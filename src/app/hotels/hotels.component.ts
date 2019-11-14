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
      .get('http://localhost:5000/hotels')
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
        .delete(`http://localhost:5000/hotels/delete`, id)
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
        .put(`http://localhost:5000/hotels/update`, this.hotelModel)
        .subscribe(result => {
          this.hotelModel = new Hotel();
          this.isUpdate = false;
        });
    }
  }

  addHotel() {
    this.httpService
      .post('http://localhost:5000/hotels/add',this.hotelModel)
      .subscribe(result => {
        this.hotels.push(result);
        this.hotelModel = new Hotel();
      });
  }
}
