import { Component, DoCheck, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-favcards',
  templateUrl: './favcards.component.html',
  styleUrls: ['./favcards.component.css', '../cards/cards.component.css']
})

export class FavcardsComponent implements OnInit, DoCheck {

  re: string = '/assets/icons/re.png';
  death: string = '/assets/icons/death.png';

  countries: Array<any>;
  totalCountries: Number;
  page: Number = 1;



  @Input('favcountries') favcountries;
  constructor(
    private _CountryService: CountryService,
    private route: Router
  ) { }

  ngDoCheck(): void {
  }

  ngOnInit(): void {
    this._CountryService.getFavCountries().subscribe(
      res => {
        this.countries = res;
        this.totalCountries = this.countries.length;
      },
      err => console.log(err)
    )
  }

  deleteFav(id) {
    this._CountryService.deleteFav(id).subscribe(
      res => this.ngOnInit(),
      err => console.log(err)
    )
  }

}
