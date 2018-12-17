import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {NgModule} from '@angular/core';
import {DownloadComponent} from './download/download.component';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {CategoryComponent} from './category/category.component';
import {ProductDetailComponent} from './product/product-detail/product-detail.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {CartComponent} from './cart/cart.component';
import {RegisterComponent} from "./register/register.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'home', component: HomeComponent, pathMatch: 'full'},
    {path: 'about', component: AboutComponent},
    {path: 'download', component: DownloadComponent},
    {path: 'products', component: ProductComponent},
    {path: 'products/:category_code', component: ProductComponent},
    {path: 'product_detail/:item_code', component: ProductDetailComponent},
    {path: 'category', component: CategoryComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LogoutComponent},
    {path: 'cart', component: CartComponent},
    {path: 'register', component: RegisterComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
