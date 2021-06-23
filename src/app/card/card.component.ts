import {Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';
import {GetWeatherService} from "../get-weather.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  city: string = '';

  constructor(private getDt: GetWeatherService,
              private route: ActivatedRoute, ) {
  }

  weather: any;

  getWeather() {
    this.city = String(this.route.snapshot.paramMap.get('city'))
    this.getDt.getData(this.city).subscribe(response => {
      this.weather = response;
    })
  }


  ngOnInit(): void {
    this.getWeather()

  }

}
