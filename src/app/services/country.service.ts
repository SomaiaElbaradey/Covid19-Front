import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private _HttpClient: HttpClient,
    private router: Router,
  ) { }

  private baseURL: string = `${environment.api}/api/country/`

  //get all countries
  public allCountries(): Observable<any> {
    return this._HttpClient
      .get(`${this.baseURL}countries`)
  }

  //remove from fav countries
  public deleteFav(id): Observable<any> {
    return this._HttpClient
      .delete(`${this.baseURL}${id}`,
      { responseType: "text" }
      )
  }

  //add fav countries
  public addFav(id): Observable<any> {
    return this._HttpClient
      .patch(`${this.baseURL}${id}`,
        { responseType: "text" }
      )
  }

  //get all countries
  public getFavCountries(): Observable<any> {
    return this._HttpClient
      .get(`${this.baseURL}getFav`)
  }

}