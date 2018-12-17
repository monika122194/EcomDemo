import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ResponceModel} from '../shared/responceModel';
import {error} from '@angular/compiler/src/util';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginResponce: ResponceModel;
  public authUser: any;
  public isAuthUser: boolean = false;
  public authToken: string = null;
  loginResponceChange = new Subject();
  authUserChange = new Subject();
  authUserDataChange = new Subject();

  constructor(private httpClient: HttpClient) { }

  loginDataSubmit(email: string, password: string) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.httpClient.post('http://ecommerce.archintech.xyz/public/api/login',
        {
          'email': email,
          'password': password
        },
        {
          headers: headers
        }
    ).subscribe(
        (responce: ResponceModel) => {
          console.log('login',responce);
          this.loginResponce = responce;
          this.setLoginData(responce);
          this.authUser = responce.data.user_detail[0];
          this.isAuthUser = true;
          this.authToken = responce.data.other_data.token;
        },error => {
          console.log(error);
        }
    );
  }

  logout() {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'token': this.authToken});
    this.httpClient.post('http://ecommerce.archintech.xyz/public/api/logout',
        {},
        {
          headers: headers
        }
    ).subscribe(
        (responce: ResponceModel) => {
          console.log(responce);
          this.destroyAuthUser();
        },error => {
          console.log(error);
        }
    );
  }

  destroyAuthUser() {
      this.authUser = null;
      this.isAuthUser = false;
      this.authToken = null;
      this.authUserChange.next(this.isAuthUser);
  }

  setLoginData(loginResponce: ResponceModel) {
    this.loginResponceChange.next(loginResponce);
  }

  getLoginData() {
    return this.loginResponce;
  }

  setAuthUser(data: any) {
    this.authUser = data;
    this.authUserDataChange.next(data);
  }

  updateAuthUser(data: any) {
      this.authUser = data;
  }

  getAuthUser() {
    return this.authUser;
  }

  getIsAuthenticated() {
    return this.isAuthUser;
  }

  getAuthToken() {
    return this.authToken;
  }

  getAuthUserProfile() {
      const headers = new HttpHeaders({'Content-Type': 'application/json', 'token': this.getAuthToken()});
      this.httpClient.post('http://ecommerce.archintech.xyz/public/api/get_profile',
          {},
          {
              headers: headers
          }
      ).subscribe(
          (responce: ResponceModel) => {
              this.authUser = responce.data;
              this.setAuthUser(responce.data);
          },error => {
              console.log(error);
          }
      );
  }
}
