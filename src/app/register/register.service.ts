import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ResponceModel} from "../shared/responceModel";
import {LoginService} from "../login/login.service";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  registerResponceChanged = new Subject();
  constructor(private httpClient: HttpClient,
              private loginService: LoginService
  ) { }

  registerDataSubmit(email: string, password: string, name: string, phone_no: string) {
    console.log(email,password,name,phone_no);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.httpClient.post('http://ecommerce.archintech.xyz/public/api/register',
      {
        'email': email,
        'name': name,
        'password': password,
        'phone_no': phone_no
      },
      {
        headers: headers
      }
    ).subscribe(
      (responce: ResponceModel) => {
        console.log(responce);
        this.setRegisterData(responce);
      }
    );
  }

  setRegisterData(responce: ResponceModel) {
    this.registerResponceChanged.next(responce);
  }
}
