import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _HTTPClient: HttpClient
  ) { }
  private baseURL = `${environment.api}`

  //login 
  public login(): Observable<any> {
    return this._HTTPClient
      .get(`${this.baseURL}login`)
  }
}
