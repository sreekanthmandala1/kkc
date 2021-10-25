import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angular5-social-login';
import { UserAgentApplication } from 'msal';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: [
  ]
})
export class MainPageComponent implements OnInit {

  // private user: SocialUser;
  public authorized: boolean = false;
  useremail: any;
  guiddata: any;
  getToken: any;
  name: any;
  userId: any;
  operation: any;
  href: string = "";
  userData;
  userAgentApplicationforMicrosoft;
  errorDesc: any;
  token: any;
  error: any;
  tokenType: any;
  constructor( private router: Router, private http: HttpClient, private route: ActivatedRoute) {
    const microsoftconfig = {
      auth: {
        clientId: 'e81a2dce-2935-4505-b149-97cbd9723ec6'
      }
    };
    this.userAgentApplicationforMicrosoft = new UserAgentApplication(microsoftconfig);
  }
  ngOnInit() {
  }
  public tokenReceivedCallback(errorDesc, token, error, tokenType) {
    if (token) {
      this.userData = token;
      console.log("Token: " + token)
    } else {
      console.log(error + ":" + errorDesc);
    }
  }
  public microsoftSignInn() {
    debugger
    var graphScopes = ["user.read", "mail.send"];
    let that = this;
    that.userAgentApplicationforMicrosoft.loginPopup(graphScopes).then(
      (idToken) => {
        //Login Success 
        
        console.log(idToken)
        let key = idToken.account.name;
        localStorage.setItem('Blog', key);
        localStorage.setItem('Provider', idToken.account.environment);
        this.name = idToken.account.name;
        this.useremail = idToken.account.userName;
        this.router.navigate(['/create-invoice']);

      }, function (error) {
        //login failure
        console.log(error);
      });
  }
  // public socialSignIn(socialPlatform: string) {
  //   let socialPlatformProvider;
  //   if (socialPlatform == "facebook") {
  //     socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
  //   } else if (socialPlatform == "google") {
  //     socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
  //   }
  //   this.socialAuthService.signIn(socialPlatformProvider).then(
  //     (userData) => {
  //       console.log(socialPlatform + " sign in data : ", userData);
  //       Now sign-in with userData        
  //       if (userData != null) {
  //         this.authorized = true;
  //         this.user = userData;
  //         this.useremail = userData.email
  //         this.name = userData.name;
  //         this.router.navigate(['/create-invoice'], { queryParams: { name: userData.email } });
  //         this.authorized = true;
  //       this.user = userData;
  //       this.useremail = userData.email;
  //       let key = userData.name;
  //       var provider = userData.provider;
  //       localStorage.setItem('Blog', key);
  //       localStorage.setItem('Provider', provider);
  //          this.router.navigate(['/create-invoice',{queryParams:{ result: provider}}],{skipLocationChange: false, replaceUrl: false});
  //       }
  //     }
  //   );
  // }
  // public signOut() {
  //   this.socialAuthService.signOut();
  //   this.authorized = false;
  // }
}
