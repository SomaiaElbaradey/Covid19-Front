import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  re: string = '/assets/icons/re.png';
  death: string = '/assets/icons/death.png';
  whiteheart: string = '/assets/icons/wHeart.png';
  redheart: string = '/assets/icons/rHeart.png';

  countries: Array<any>;
  totalCountries:Number;
  page:Number =1;

  constructor(
    private _CountryService: CountryService
  ) { }

  ngOnInit(): void {
    this._CountryService.allCountries().subscribe(
      res => {
        this.countries = res;
        this.totalCountries = this.countries.length;
      },
      err => console.log(err)
    )
  }

  addFav(id){
    this._CountryService.addFav(id).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
}
