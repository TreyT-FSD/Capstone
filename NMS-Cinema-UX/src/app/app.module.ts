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

@NgModule({
  declarations: [    
    MainComponent, PageNotFoundComponent, AboutComponent, ContactComponent, BrowseComponent, AdminComponent, AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AdminService, AuthGaurd],
  bootstrap: [MainComponent]
})
export class AppModule { }
