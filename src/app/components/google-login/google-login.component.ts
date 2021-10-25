import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookLoginProvider, SocialAuthService } from 'angularx-social-login';
import { GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styles: [],
})
export class GoogleLoginComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;
  authorized: boolean;
  useremail: string;
  @Output() parentFunction:EventEmitter<any> = new EventEmitter();
  constructor(private authService: SocialAuthService, private router: Router) {}

  ngOnInit(): void {
   
    
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
    });
  }

  signInWithGoogle(socialPlatform: string): void {
    debugger
    // this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

    // ;
    debugger
    let socialPlatformProvider;
    if (socialPlatform == 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.authService.signIn(socialPlatformProvider).then((userData) => {
      console.log(socialPlatform + ' sign in data : ', userData);

      // Now sign-in with userData
      if (userData != null) {
        this.authorized = true;
        this.user = userData;
        this.useremail = userData.email;
        let key = userData.name;
        var provider = userData.provider;
        localStorage.setItem('Blog', key);
        localStorage.setItem('Provider', provider);
        //  this.router.navigate(['/home',{queryParams:{ result: provider}}],{skipLocationChange: true, replaceUrl: false});
        this.router.navigate(['/create-invoice']);
      }
      //this.router.navigate(['home']);
    });
  }
  
  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
}
