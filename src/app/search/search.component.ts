import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {fromEvent} from "rxjs";
import {auditTime, debounceTime, distinctUntilChanged, map, pluck, switchMap, tap} from "rxjs/operators";
import {ajax} from "rxjs/ajax";

import {HttpClient} from "@angular/common/http";
import {CityService} from "../city.service";
import {FormControl} from "@angular/forms";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild('cityN', {static: true}) input: ElementRef;
  searchResult$: any;
  city: string = '';
  cities: Array<any>;
  cityNames: Array<string> = [];
  citySearchControl: FormControl = new FormControl();

  constructor(private cityService: CityService
  ) {
  }

  greet(cityName: string) {
    this.city = cityName;
    this.input.nativeElement.value = '';
  }

  getInputValue() {

    this.searchResult$ = fromEvent(this.input.nativeElement, 'input').pipe(
      auditTime(500),
      pluck('target', 'value'),
      distinctUntilChanged(),
      switchMap(res => this.cityService.getCityData(res)),
      pluck('data')
    ).subscribe(res => {

      this.cities = res;
      this.cityNames = this.cities.map(el => el.name)

    })

  }

  ngOnInit(): void {
    this.getInputValue()


  }

}

