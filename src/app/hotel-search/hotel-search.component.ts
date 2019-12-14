import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Hotel} from "../models/hotel";
import {HotelsService} from "../hotels/hotels.service";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.less'],
  providers: [HotelsService]
})
export class HotelSearchComponent implements OnInit {
  hotels$: Observable<Hotel[]>;
  private searchTerm = new Subject<string>();

  constructor(private hotelService: HotelsService) { }

  public search(term: string) {
    this.searchTerm.next(term);
  }

  ngOnInit() {
    this.hotels$ = this.searchTerm.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((term: string) => this.hotelService.searchHotels(term))
    )
  }

}
