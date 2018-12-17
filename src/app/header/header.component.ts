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
      this.loginService.authUserChange.subscribe(
          (responce: boolean) => {
            this.isAuthUser = responce;
          }
      );
      this.authUser = this.loginService.getAuthUser();
      this.loginService.authUserDataChange.subscribe(
          (responce) => {
              this.authUser = responce;
          }
      );
  }

}
