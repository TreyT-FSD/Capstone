import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { BrowseComponent } from './browse/browse.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { GenreAddComponent } from './genre-add/genre-add.component';
import { GenreUpdateComponent } from './genre-update/genre-update.component';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { MovieUpdateComponent } from './movie-update/movie-update.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGaurd } from './services/auth-gaurd.service';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'browse', component: BrowseComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'user', component: UsersComponent, canActivate: [AuthGaurd] },
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'cart/checkout', component: CheckoutComponent, canActivate: [AuthGaurd] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGaurd] },
  { path: 'admin/movie-add', component: MovieAddComponent, canActivate: [AuthGaurd] },
  { path: 'admin/movie/:id', component: MovieUpdateComponent, canActivate: [AuthGaurd] },
  { path: 'admin/genre-add', component: GenreAddComponent, canActivate: [AuthGaurd] },
  { path: 'admin/genre/:id', component: GenreUpdateComponent, canActivate: [AuthGaurd] },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: '', redirectTo: '/browse', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
