import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-favnavbar',
  templateUrl: './favnavbar.component.html',
  styleUrls: ['../home/home.component.css']
})
export class FavnavbarComponent implements OnInit {
  logo: string = '/assets/img/logo.png';
  user: string = '/assets/icons/user.png';
  logout: string = '/assets/icons/logout.png';

  constructor(
    private _CountryService: CountryService,
    private _UserService: UserService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  @Output('favcountries') fav = new EventEmitter();
  getFav() {
    this._CountryService.getFavCountries().subscribe(
      res => {
        console.log(res);
        this.fav.emit(res);
        this.route.navigateByUrl('/favourites');
      },
      err => console.log(err)
    )
  }

  goHome() {
    this.route.navigateByUrl('/home');
  }

  logOut() {
    this._UserService.logout();
  }
}
