import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ResponceModel} from '../shared/responceModel';
import {LoginService} from '../login/login.service';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    public cartList: any = null;
    cartListChanged = new Subject();
    cartActionResponceChanged = new Subject();

  constructor(private loginService: LoginService,
              private httpClient: HttpClient) { }


    getCartListRequest() {
        const authToken = this.loginService.getAuthToken();
        const headers = new HttpHeaders({'Content-Type': 'application/json', 'token': authToken});
        this.httpClient.post('http://127.0.0.1/ecommerce/public/api/get_cart_list'
            , {}
            , {headers: headers}
        ).subscribe(
            (responce: ResponceModel) => {
                this.cartList = responce;
                this.setCartList(responce);
            }
        );
    }

  addToCart(itemCode: string) {
      const headers = new HttpHeaders({'Content-Type': 'application/json', 'token': this.loginService.getAuthToken()});
      this.httpClient.post('http://127.0.0.1/ecommerce/public/api/cart_action',
          {
              'action_type': 1,
              'quantity': 1,
              'item_code': itemCode
          },
          {
              headers: headers
          }
      ).subscribe(
          (responce: ResponceModel) => {
              let authUser = this.loginService.getAuthUser();
              authUser.cart_count = responce.data.cart_count;
              this.loginService.updateAuthUser(authUser);
              this.cartActionResponceChanged.next(responce);
              this.loginService.getAuthUserProfile();
              // console.log('addToCart responce', responce);
          },error => {
              console.log(error);
          }
      );
  }

  updateCart(itemCode: string, cartId: number, actionType: number, quantity: number) {
      const headers = new HttpHeaders({'Content-Type': 'application/json', 'token': this.loginService.getAuthToken()});
      this.httpClient.post('http://127.0.0.1/ecommerce/public/api/cart_action',
          {
              'action_type': actionType,
              'quantity': quantity,
              'item_code': itemCode,
              'cart_id': cartId
          },
          {
              headers: headers
          }
      ).subscribe(
          (responce: ResponceModel) => {
              // console.log('updatecart responce', responce);
              this.getCartListRequest();
              this.loginService.getAuthUserProfile();
          },error => {
              console.log(error);
          }
      );
  }

  setCartList(data) {
      this.cartList = data;
      this.cartListChanged.next(data);
  }

  getCartList() {
      return this.cartList;
  }
}
