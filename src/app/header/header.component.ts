import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isAuthUser: boolean;
  public authUser: any = null;
  constructor(public router: Router,
              private loginService: LoginService) { }

  ngOnInit() {
      this.isAuthUser = this.loginService.getIsAuthenticated();
      console.log(1,this.isAuthUser);
      this.loginService.authUserChange.subscribe(
          (responce: boolean) => {
            this.isAuthUser = responce;
            console.log(2,this.isAuthUser);
          }
      );
      this.authUser = this.loginService.getAuthUser();
    console.log(3,this.authUser);
      this.loginService.authUserDataChange.subscribe(
          (responce) => {
              this.authUser = responce;
            console.log(4,this.authUser);
          }
      );
  }

}
