import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './services/guards/login-guard';
import { IsLoginGuard } from './services/guards/is-loggin-guard';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageErrorComponent } from './components/page-error/page-error.component';
import { PageProductComponent } from './components/page-product/page-product.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component:HomeComponent, canActivate:[LoginGuard] },
  { path: 'cart', component:CartComponent },
  { path: 'login', component:LoginComponent, canActivate:[IsLoginGuard] },
  { path: 'register', component:RegisterComponent },
  { path: 'purchase', component: PurchaseComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[LoginGuard] },
  { path: 'product/:id', component: PageProductComponent },
  { path: '**', component: PageErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
