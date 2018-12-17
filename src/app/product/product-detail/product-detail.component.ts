import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {DataStorageService} from '../data-storage.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';
import {ProductModel} from '../product.model';
import {LoginService} from '../../login/login.service';
import {CartService} from '../../cart/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit,OnDestroy {

  public message: string;
  private productCode: string;
  public productDetail: ProductModel;
  public relatedItem: any;
  public subscription: Subscription;
  public statusCode: any = null;
  public productDetailResponce: any;
  public productPrice: number;
  public productPriceFinal: number = 0;
  public cartResponce: any;

  constructor(private productService: ProductService,
              private dataStorageService: DataStorageService,
              private activeRoute: ActivatedRoute,
              private cartService: CartService,
              private loginService: LoginService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
        (params: Params) => {
          this.productCode = params['item_code'];
          this.dataStorageService.getProductDetail(this.productCode);
          this.subscription = this.productService.productDetailChanged.subscribe(
              (responce: any) => {
                this.productDetailResponce = responce;
                // this.statusCode = responce.status_code;
                // this.message = responce.message;
                this.productDetail = responce.data.product_detail;
                this.relatedItem = responce.data.related_items;
                this.productPrice = (this.productDetail.special_price > 0) ? this.productDetail.special_price : this.productDetail.Rate;

                if (responce.data.product_detail.discount > 0) {
                    this.productPriceFinal = (this.productPrice - (this.productPrice * this.productDetail.discount / 100));
                }
              }
          );
          this.productDetailResponce = this.productService.getProductDetailResponce();
        }
    );
  }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onAddToCart() {
        if (this.loginService.getAuthToken() == '' || this.loginService.getAuthToken() == null) {
            return alert('Please do login first');
        }
        this.cartService.addToCart(this.productCode);
        this.cartService.cartActionResponceChanged.subscribe(
      (responce: any) => {
                this.cartResponce = responce;
                this.statusCode = responce.status_code;
                this.message = responce.message;
            }
        );
    }

}
