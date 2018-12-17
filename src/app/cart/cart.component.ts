import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login/login.service';
import {CartService} from './cart.service';
import {ResponceModel} from '../shared/responceModel';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartListData: any = null;
  constructor(public loginService: LoginService,
              private cartService: CartService) { }

  ngOnInit() {
    if (this.loginService.isAuthUser) {
      this.cartService.getCartListRequest();
      this.cartListData = this.cartService.getCartList();
      this.cartService.cartListChanged.subscribe(
          (responce) => {
            this.cartListData = responce;
              // console.log(this.cartListData);
          }
      );
    }
  }

  onIncQty(index: number) {
    // call the update api and then call get_cart_list so you do not have do anything like jquery here
    const cartList = this.cartListData.data.cart_list;
    const qty = cartList[index].qty + 1;
    const actionType = 3;

    this.cartService.updateCart(cartList[index].ItemCode, cartList[index].id, actionType, qty);

    // console.log(cartList[index]);
    // console.log(qty);
  }

  onDecQty(index: number) {
    // call the update api and then call get_cart_list so you do not have do anything like jquery here
    const cartList = this.cartListData.data.cart_list;
    const qty = cartList[index].qty - 1;
    const actionType = 3;

    if (qty > 0) {
        this.cartService.updateCart(cartList[index].ItemCode, cartList[index].id, actionType, qty);
    }

    // console.log(cartList[index]);
    // console.log(qty);
  }

  onDeleteCartItem(index: number) {
    // call the update api and then call get_cart_list so you do not have do anything like jquery here
    const cartList = this.cartListData.data.cart_list;
    const qty = 1;
    const actionType = 2;

    this.cartService.updateCart(cartList[index].ItemCode, cartList[index].id, actionType, qty);

    // console.log(cartList[index]);
    // console.log(qty);
  }

}
