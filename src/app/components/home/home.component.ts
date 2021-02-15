import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logo:string = '/assets/img/logo.png';
  image:string = '/assets/img/glob.png';

  constructor( ) { }
  ngOnInit( ): void {  }

  login(){

  }
  register(){
    
  }
}
