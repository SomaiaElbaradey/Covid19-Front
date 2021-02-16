import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-favnavbar',
  templateUrl: './favnavbar.component.html',
  styleUrls: ['../home/home.component.css']
})
export class FavnavbarComponent implements OnInit {
  logo: string = '/assets/img/logo.png';

  constructor(
    private _CountryService: CountryService,
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
}
