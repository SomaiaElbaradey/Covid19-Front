import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  mobile:string = '/assets/img/mobile3.png';
  logo:string = '/assets/img/logo.png';
  constructor() { }

  ngOnInit(): void {
  }

}
