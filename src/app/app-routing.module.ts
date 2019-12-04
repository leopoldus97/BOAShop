import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {ProductDetailComponent} from './product/product-detail/product-detail.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {AdminPageComponent} from './admin/admin-page/admin-page.component';
import {AdminListComponent} from './admin/admin-list/admin-list.component';
import {AdminDetailsComponent} from './admin/admin-details/admin-details.component';
import {AdminCreateComponent} from './admin/admin-create/admin-create.component';
import {UserCreateComponent} from './user/user-create/user-create.component';
import {AdminCollectionComponent} from './admin/admin-collection/admin-collection.component';


const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'products', component: ProductListComponent },
  {path: 'products/:name', component: ProductListComponent},
  { path: 'productdetail/:id', component: ProductDetailComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'login', component: LoginPageComponent},

  { path: 'admin', component: AdminPageComponent,
    children: [
      { path: '', component: AdminListComponent},
      { path: 'details/:id', component: AdminDetailsComponent},
      { path: 'create', component: AdminCreateComponent},
      { path: 'collection', component: AdminCollectionComponent}
    ]
  },
  { path: 'login', component: LoginPageComponent},
  { path: 'create-account', component: UserCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
