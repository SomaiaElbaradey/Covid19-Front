import { Component, DoCheck, OnInit, Input } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-favcards',
  templateUrl: './favcards.component.html',
  styleUrls: ['../cards/cards.component.css']
})

export class FavcardsComponent implements OnInit, DoCheck {

  re: string = '/assets/icons/re.png';
  death: string = '/assets/icons/death.png';

  countries: Array<any>;
  totalCountries:Number;
  page:Number =1;



  @Input('favcountries') favcountries;
  constructor(
    private _CountryService: CountryService
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

}
