import { Injectable } from '@angular/core';
import {ProductModel} from '../product/product.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ResponceModel} from '../shared/responceModel';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

    private category: any;
    categoryChanged = new Subject();

    constructor(private httpClient: HttpClient) { }

    getParentCatList() {
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      this.httpClient.post('http://127.0.0.1/ecommerce/public/api/get_parent_category',
          {},
          {
        headers: headers
      }).map(
          (responce: ResponceModel) => {
            return responce;
          }
      ).subscribe(
          (responce: ResponceModel) => {
              this.setParentCategories(responce.data);
              return responce;
          }
      );
    }

    setParentCategories(category: any) {
        this.category = category;
        this.categoryChanged.next(this.category);
    }

    getParentCategories() {
      return this.category;
    }
}
