import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {ProductDetailComponent} from './product/product-detail/product-detail.component';


const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
