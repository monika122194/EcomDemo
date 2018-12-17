import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { DownloadComponent } from './download/download.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule} from '@angular/common/http';
import {ProductService} from './product/product.service';
import { ShortenPipe } from './product/shorten.pipe';
import { RoundTwoDigitsPipe } from './shared/round-two-digits.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { CategoryComponent } from './category/category.component';
import {CategoryService} from './category/category.service';
import {ProductDetailComponent} from './product/product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {LoginService} from './login/login.service';
import { LogoutComponent } from './logout/logout.component';
import {CartService} from './cart/cart.service';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    DownloadComponent,
    HomeComponent,
    ProductComponent,
    ShortenPipe,
    RoundTwoDigitsPipe,
    CategoryComponent,
    ProductDetailComponent,
    CartComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
  ],
  providers: [ProductService, CategoryService, LoginService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
