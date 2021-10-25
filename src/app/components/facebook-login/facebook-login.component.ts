import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider,SocialUser} from "angularx-social-login";

@Component({
  selector: 'app-facebook-login',
  templateUrl: './facebook-login.component.html',
  styles: [
  ]
})
export class FacebookLoginComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;
  authorized:any;
  useremail:any;
  
  
  constructor(private authService: SocialAuthService,private router:Router) { }

  ngOnInit(): void {
    
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
 

  signInWithFB(socialPlatform:string): void {
    debugger
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    
    let socialPlatformProvider;
    if (socialPlatform == 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
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
  });
}

  signOut(): void {
    this.authService.signOut();
  }

  refreshToken(): void {
    this.authService.refreshAuthToken(FacebookLoginProvider.PROVIDER_ID);
  }

}
