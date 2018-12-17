import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ProductModel} from './product.model';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import 'rxjs/Rx';
import {ResponceModel} from '../shared/responceModel';
import {Subject} from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    public responce: any;
    private products: ProductModel[] = [];
    private category: any = [];
    public productDetailResponce: any;
    productsChanged = new Subject<ProductModel[]>();
    productDetailChanged = new Subject<any>();


  constructor(private httpClient: HttpClient) { }

    getProductList() {
        return this.products.slice();
    }

    getCategoryList() {
      return this.category.slice();
    }

    // setProductList(products: ProductModel[], category: any) {
    setProductList(responce) {
        // this.products = products;
        // this.category = category;
        this.responce = responce;
        this.productsChanged.next(responce);
    }

    setProductDetailResponce(responce) {
        this.productDetailResponce = responce;
        this.productDetailChanged.next(responce);
    }

    getProductDetailResponce() {
        return this.productDetailResponce;
    }
}
