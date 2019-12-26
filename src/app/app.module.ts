import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { AdminCreateComponent } from './admin/admin-create/admin-create.component';
import { AdminDetailsComponent } from './admin/admin-details/admin-details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { AdminCollectionComponent } from './admin/admin-collection/admin-collection.component';
import { CollectionListComponent } from './collection/collection-list/collection-list.component';
import { ModalComponent } from './shared/modal/modal.component';
import { AccountPageComponent } from './user/account-page/account-page.component';
import {ErrorInterceptor} from './shared/helpers/error.interceptor';
import {JwtInterceptor} from './shared/helpers/jwt.interceptor';
import { AdminCollectionListComponent } from './admin/admin-collection-list/admin-collection-list.component';
import { BlogComponent } from './blog/blog.component';
import { AdminCollectionEditComponent } from './admin/admin-collection-edit/admin-collection-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WelcomePageComponent,
    ProductListComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
    LoginPageComponent,
    UserCreateComponent,
    LoginPageComponent,
    AdminPageComponent,
    AdminListComponent,
    AdminCreateComponent,
    AdminDetailsComponent,
    AdminCollectionComponent,
    CollectionListComponent,
    ModalComponent,
    AccountPageComponent,
    AdminCollectionListComponent,
    BlogComponent,
    AdminCollectionEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
