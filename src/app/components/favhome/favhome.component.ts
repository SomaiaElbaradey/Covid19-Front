import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favhome',
  templateUrl: './favhome.component.html',
  styleUrls: ['./favhome.component.css']
})
export class FavhomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  favcountries: string = '';

  fav(e) {
      this.favcountries = e;
  }

}
