import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor( private http: HttpClient) { }

  getCityData(query:any):Observable<any>{
    return this.http.get( `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${query}`,
      { headers:  { "x-rapidapi-key": "b987f8a7ccmshd5b7d39db8a8866p171a5ajsn1797a89b81d0",
          "x-rapidapi-host": "wft-geo-db.p.rapidapi.com" }})
  }
}
