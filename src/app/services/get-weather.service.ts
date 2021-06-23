import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {

  constructor(private http: HttpClient) {

  }
  getData(cityName:string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=e5f2f2e0ee164b659030b767214e0ba1`)
  }

}
