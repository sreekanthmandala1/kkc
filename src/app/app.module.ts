import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{AuthModule} from '@auth0/auth0-angular';
import {environment as env} from '../environments/environment';
import { config, from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MainPageComponent } from './main-page/main-page.component';
import { AuthService, AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider, LinkedinLoginProvider } from 'angular5-social-login';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { UserImageComponent } from './user-image/user-image.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { FooterComponent } from './footer/footer.component';
import { SocialLoginComponent } from './social-login/social-login.component';
import { InvoiceDataComponent } from './invoice-data/invoice-data.component';
import { DownloadInvoiceeComponent } from './download-invoicee/download-invoicee.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AngularmaterialModule} from "../app/angular-material/angular-material.module";
import { GoogleLoginComponent } from './components/google-login/google-login.component';
import {GoogleModule} from '../app/components/google/google.module';
import { FacebookLoginComponent } from './components/facebook-login/facebook-login.component'
export function provideConfig() {
  return config;
}
// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("585641982653514")
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("184021312488-40fbs47e9ejeebphia3tk9k0eiebi4p4.apps.googleusercontent.com"),
      },
      {
        id: LinkedinLoginProvider.PROVIDER_ID,
        provider: new LinkedinLoginProvider("785x8liqxz2stg")
      }
    ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CreateInvoiceComponent,
    UserImageComponent,
    NavBarComponent,
    MainNavComponent,
    FooterComponent,
    MainPageComponent,
    SocialLoginComponent,
    InvoiceDataComponent,
    DownloadInvoiceeComponent,
    NotFoundComponent,
    GoogleLoginComponent,
    FacebookLoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    AuthModule.forRoot({
      ...env.auth,
    }),
    AngularmaterialModule,
    ReactiveFormsModule,
    GoogleModule
    
    
  ],
  providers: [
    {
      provide: AuthService,
      useFactory: getAuthServiceConfigs,
      
    }
  ], 
  bootstrap: [AppComponent],
})
export class AppModule {}
