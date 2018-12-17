import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from './product.service';
import {ProductModel} from './product.model';
import {Subscription} from 'rxjs';
import {DataStorageService} from './data-storage.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {

  categoryCode: string;
  public p: number = 1;
  public products: ProductModel[];
  public category: any = [];
  private subscription: Subscription;
  constructor(private productService: ProductService,
              private dataStorageservice: DataStorageService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {

    // this.dataStorageservice.getProductList(this.categoryCode);

    this.activeRoute.params.subscribe(
      (params: Params) => {
          this.categoryCode = params['category_code'];
          this.dataStorageservice.getProductList(this.categoryCode);
          this.subscription = this.productService.productsChanged.subscribe(
              (responce: any) => {
                  if (responce && responce.category.length > 0) {
                      this.products = responce.product_list;
                      this.category = responce.category;
                  } else {
                      // this.category = null;
                      this.products = responce.product_list;
                      this.category = responce.category;
                  }
              }
          );
          // this.products = this.productService.getProductList();
          // this.category = this.productService.getCategoryList();
      }
    );

    /*this.subscription = this.productService.productsChanged.subscribe(
      (responce: any) => {
          console.log(2);
          if (responce.category.length > 0) {
              // this.products = null;
              this.category = responce.category;
          } else {
              // this.category = null;
              this.products = responce.product_list;
          }
          // this.products = this.productService.getProductList();
          // this.category = this.productService.getCategoryList();
      }
    );*/
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
