import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _HttpClient: HttpClient,
    private router: Router
  ) { }
  private baseURL = `${environment.api}/api/user/`

  //login 
  public login(username: string, password: string): Observable<any> {
    return this._HttpClient
      .post(
        `${this.baseURL}login`,
        { username, password },
        { responseType: "text" }
      ).pipe(
        map((response) => {
          if (response) {
            localStorage.setItem("Covid19Token", response);
            this.router.navigateByUrl('/home');
          }
        })
      )
  }

  //register request 
  public register(username: string, password: string): Observable<any> {
    return this._HttpClient
      .post(
        `${this.baseURL}register`,
        { username, password },
        { responseType: "text" }
      ).pipe(
        map((response) => {
          if (response) {
            localStorage.setItem("Covid19Token", response);
            this.router.navigateByUrl('/home');
          }
        })
      )
  }

  public isLogged(){
    return !!(localStorage.getItem("Covid19Token"));
  }

  public logout() {
    localStorage.removeItem("Covid19Token");
    this.router.navigateByUrl('/');
  }
}
