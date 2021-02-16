import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../home/home.component.css']
})
export class HeaderComponent implements OnInit {
  logo: string = '/assets/img/logo.png';
  image: string = '/assets/img/glob.png';
  constructor() { }

  ngOnInit(): void {
  }

}
