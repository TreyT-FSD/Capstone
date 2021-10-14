import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BrowseComponent } from './browse/browse.component';
import { AdminComponent } from './admin/admin.component';
import { AdminService } from './services/admin.service';
import { AuthGaurd } from './services/auth-gaurd.service';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { MovieUpdateComponent } from './movie-update/movie-update.component';
import { GenresComponent } from './genres/genres.component';
import { GenreAddComponent } from './genre-add/genre-add.component';
import { GenreUpdateComponent } from './genre-update/genre-update.component';
import { UsersComponent } from './users/users.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserService } from './services/user.service';
import { MovieService } from './services/movie.service';
import { GenreService } from './services/genre.service';

@NgModule({
  declarations: [    
    MainComponent, PageNotFoundComponent, AboutComponent, ContactComponent, BrowseComponent, AdminComponent, AdminLoginComponent, MoviesComponent, MovieAddComponent, MovieUpdateComponent, GenresComponent, GenreAddComponent, GenreUpdateComponent, UsersComponent, UserRegistrationComponent, UserLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AdminService, AuthGaurd, UserService, MovieService, GenreService],
  bootstrap: [MainComponent]
})
export class AppModule { }
