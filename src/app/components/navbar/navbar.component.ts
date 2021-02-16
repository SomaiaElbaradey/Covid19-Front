import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../home/home.component.css']
})
export class NavbarComponent implements OnInit {
  logo: string = '/assets/img/logo.png';
  closeResult: string;
  logged: boolean = false;

  constructor(
    private modalService: NgbModal,
    private _UserService: UserService
  ) { }

  ngOnInit(): void {
  }
  //open login form
  login(login) {
    this.err = null;
    this.logged = false;
    this.modalService.open(login, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  //login
  err = null;
  signin(user) {
    this.err = null;
    this._UserService.login(user.username.value, user.password.value).subscribe(
      res => {
        this.logged = true;
        console.log(res);
      },
      err => {
        console.log(err);
        this.err = err.error;
      }
    )
  }

  //open sign up modal
  signup(signup) {
    this.err = null;
    this.logged = false;
    this.modalService.open(signup, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  //register
  register(user) {
    this.err = null;
    this._UserService.register(user.username.value, user.password.value).subscribe(
      res => this.logged = true,
      err => {
        console.log(err);
        this.err = err.error;
      }
    )
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
