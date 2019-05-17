import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ConsentformComponent } from './consentform/consentform.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShopAddPageComponent } from './shop-add-page/shop-add-page.component';
import { ShopAddProductComponent } from './shop-add-product/shop-add-product.component';
import { ShopAddProductWriteComponent } from './shop-add-product-write/shop-add-product-write.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { ShopEventComponent } from './shop-event/shop-event.component';
import { ShopReviewComponent } from './shop-review/shop-review.component';

const routes: Routes = [
  { path: 'main/Home', component: MainComponent },
  { path: 'main/Login', component: LoginComponent },
  { path: 'main/Signup', component: SignupComponent },
  { path: 'main/Consentform/:no', component: ConsentformComponent },
  { path: 'main/Product/:no', component: ProductComponent },
  { path: 'main/ProductDetail/:no', component: ProductDetailComponent },
  { path: 'main/ShopAddPage', component: ShopAddPageComponent },
  { path: 'main/ShopAddProduct', component: ShopAddProductComponent },
  { path: 'main/ShopAddProductWrite', component: ShopAddProductWriteComponent },
  { path: 'main/ShopPage', component: ShopPageComponent },
  { path: 'main/ShopEventPage', component: ShopEventComponent },
  { path: 'main/ShopReviewPage', component: ShopReviewComponent },

  { path: 'main', redirectTo: 'main/Home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
