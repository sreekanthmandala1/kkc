import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '184021312488-40fbs47e9ejeebphia3tk9k0eiebi4p4.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('1370874466610019')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
})
export class GoogleModule { }
