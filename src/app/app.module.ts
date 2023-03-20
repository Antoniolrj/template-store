import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { NavComponent } from './components/nav/nav.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { LoginGuard } from './services/guards/login-guard';
import { CookieService } from 'ngx-cookie-service';
import { IsLoginGuard } from './services/guards/is-loggin-guard';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { PayMethodComponent } from './components/pay-method/pay-method.component';
import { OnlyNumberDirective } from './directives/only-number.directive';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageErrorComponent } from './components/page-error/page-error.component';
import { PageProductComponent } from './components/page-product/page-product.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    NavComponent,
    ReversePipe,
    TimeAgoPipe,
    HighlightDirective,
    LoginComponent,
    FooterComponent,
    CartComponent,
    ProductCartComponent,
    HomeComponent,
    RegisterComponent,
    PurchaseComponent,
    PayMethodComponent,
    OnlyNumberDirective,
    DashboardComponent,
    PageErrorComponent,
    PageProductComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [LoginGuard, IsLoginGuard, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
