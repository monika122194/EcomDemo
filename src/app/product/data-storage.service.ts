import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ProductModel} from './product.model';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import 'rxjs/Rx';
import {ResponceModel} from '../shared/responceModel';
import {ProductService} from './product.service';
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

    constructor(private httpClient: HttpClient,
                private productService: ProductService) { }

    getProductList(categoryCode: string = null) {

        if (categoryCode !== '' || categoryCode !== null) {
            const headers = new HttpHeaders({'Content-Type': 'application/json'});
            this.httpClient.post('http://ecommerce.archintech.xyz/public/api/get_category_list',
                {
                    'category_code': categoryCode
                },
                {
                    headers: headers
                }
            )
            // .map(
            //     (responce: ResponceModel) => {
            //         return responce;
            //     }
            // )
            .subscribe(
                (responce: ResponceModel) => {
                    this.productService.setProductList(responce.data);
                    // this.productService.setProductList(responce.data.product_list, responce.data.category);
                }
            );
        }
    }

    getProductDetail(itemCode: string) {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        this.httpClient.post('http://ecommerce.archintech.xyz/public/api/get_product_detail',
            {
                'item_code': itemCode
            },
            {
                headers: headers
            })
            .map(
                (responce: ResponceModel) => {
                    return responce;
                }
            )
            .subscribe(
                (responce: ResponceModel) => {
                    this.productService.setProductDetailResponce(responce);
                    // this.productService.setProductList(responce.data.product_list, responce.data.category);
                }
            );
    }
}
