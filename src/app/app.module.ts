import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import {AgmCoreModule} from '@agm/core';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ConsentformComponent } from './consentform/consentform.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShopAddPageComponent } from './shop-add-page/shop-add-page.component';
import { ShopAddProductComponent } from './shop-add-product/shop-add-product.component';
import { ShopExplanationComponent } from './shop-explanation/shop-explanation.component';
import { ShopAddLoginComponent } from './shop-add-login/shop-add-login.component';
import { ShopAddProductWriteComponent } from './shop-add-product-write/shop-add-product-write.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { ShopEventComponent } from './shop-event/shop-event.component';
import { ShopReviewComponent } from './shop-review/shop-review.component';

// List of providers
const providers = [];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    SignupComponent,
    ConsentformComponent,
    ProductComponent,
    ProductDetailComponent,
    ShopAddPageComponent,
    ShopAddProductComponent,
    ShopExplanationComponent,
    ShopAddLoginComponent,
    ShopAddProductWriteComponent,
    NavbarComponent,
    FooterComponent,
    ShopPageComponent,
    ShopEventComponent,
    ShopReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,
    BrowserAnimationsModule, FormsModule,
    OwlModule,
    MatDialogModule,
    MatButtonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyApnvUYJ67e9ukXrfUvsrQhdU54MN5S09s'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginComponent
  ]
})
export class AppModule { }
