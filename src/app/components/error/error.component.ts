import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['../home/home.component.css']
})
export class ErrorComponent implements OnInit {
  logo: string = '/assets/img/logo.png';
  image: string = '/assets/img/glob.png';

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  navigateToHome(){
    this.route.navigateByUrl('/home');
  }
}
