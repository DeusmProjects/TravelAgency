import { Component, OnInit } from '@angular/core';
import {HotelsService} from "../hotels/hotels.service";
import {Hotel} from "../models/hotel";
import {WebSocketService} from "../web-socket.service";

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.less'],
  providers: [HotelsService, WebSocketService]
})
export class HotelsListComponent implements OnInit {

  hotels: Hotel[] = [];
  search: string = "";

  constructor(private httpService : HotelsService, private webSocketService: WebSocketService) { }

  ngOnInit() {
    this.httpService
      .get('http://localhost:5000/hotels')
      .subscribe(result => this.hotels = result.hotels);


    this.webSocketService.webSocketContext.onmessage = (result: any) => {
      console.log(JSON.parse(result.data).hotels);
      this.hotels = JSON.parse(result.data).hotels;
    }
  }

  changeInput() {
    console.log('search', this.search);

    this.httpService
      .get('http://localhost:5000/hotels/' + this.search)
      .subscribe(result => this.hotels = result.hotels);
  }
}
