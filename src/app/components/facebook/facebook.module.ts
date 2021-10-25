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
              '276020003674-6dkiudvd4sc2c4olf7fj5hmc1rfrdil0.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('585641982653514')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
})
export class FacebookModule { }
