import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './services/guards/login-guard';
import { IsLoginGuard } from './services/guards/is-loggin-guard';
import { PurchaseComponent } from './components/purchase/purchase.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component:HomeComponent, canActivate:[LoginGuard] },
  { path: 'cart', component:CartComponent },
  { path: 'login', component:LoginComponent, canActivate:[IsLoginGuard] },
  { path: 'register', component:RegisterComponent },
  { path: 'purchase', component: PurchaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
