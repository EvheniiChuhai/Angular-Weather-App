import {Component, OnInit} from '@angular/core';
import {GetWeatherService} from "../get-weather.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-full-card',
  templateUrl: './full-card.component.html',
  styleUrls: ['./full-card.component.scss']
})
export class FullCardComponent implements OnInit {
  city: string;

  constructor(private getDt: GetWeatherService,
              private route: ActivatedRoute,) {
  }

  weather: any;

  getFullWeather() {
    this.city = String(this.route.snapshot.paramMap.get('city'))
    this.getDt.getData(this.city).subscribe(response => {
      this.weather = response

    })

  }

  ngOnInit(): void {
    this.getFullWeather();
  }

}
