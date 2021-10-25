import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { SocialAuthService, SocialUser} from 'angularx-social-login';
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent implements OnInit {
  user: SocialUser;
  getLocalData:any;
  getProvider:any;
  localStorage: any;
  LogoutData:any;
  FacebookLogin:boolean=false;
  MicrosoftLogin:boolean=false;
  GmailLogin:boolean=false;
  snelstartLogin : boolean = false;
  condition0 :any;
  condition2:any;
  condition1:any;
  userData:any;
  data: SocialUser;
  ab:any;
  snelstartLogout:boolean=false;
  userNameTrueorFalse:boolean=false;
  constructor(public auth:AuthService,private authService: SocialAuthService,private router:Router) {}

  ngOnInit(): void {
    
    this.getLocalData = localStorage.getItem('Blog');
    this.getProvider = localStorage.getItem('Provider');

    if (this.getProvider=="facebook") {
      this.FacebookLogin=true;
      this.MicrosoftLogin=false;
      this.GmailLogin=false;
      this.userNameTrueorFalse=true;
      this.snelstartLogout=false;
    }
    else if (this.getProvider=="google") {
      this.FacebookLogin=false;
      this.MicrosoftLogin=false;
      this.snelstartLogout=false;
      this.GmailLogin=true;
      this.userNameTrueorFalse=true;
    } 
    else if (this.getProvider.includes("microsoft")){
      this.snelstartLogout=false;
      this.FacebookLogin=false;
      this.MicrosoftLogin=true;
      this.GmailLogin=false;
      this.userNameTrueorFalse=true;
    }
    else
    {
      this.FacebookLogin=false;
      this.MicrosoftLogin=false;
      this.snelstartLogout=true;
      this.userNameTrueorFalse=false;
      this.GmailLogin=false;
    }

    // if (this.getProvider=="facebook") {
    //   this.FacebookLogin=true;
    //   this.MicrosoftLogin=false;
    //   this.GmailLogin=false;
    // } else if (this.getProvider=="google") {
    //   this.FacebookLogin=false;
    //   this.MicrosoftLogin=false;
    //   this.GmailLogin=true;
    // } else {
    //   this.FacebookLogin=false;
    //   this.MicrosoftLogin=true;
    //   this.GmailLogin=false;
    // }
    
   
// switch (true) {
//   case this.condition0:this.getProvider=="facebook"
//     break;
//     case this.condition1:this.getProvider=="google"
//     break;
//     case this.condition2:this.getProvider=="microsoft"
//     break;
//   default:
//     this.snelstartLogin = true;
// }
    // if(this.getProvider == "snelstart"){
    //   this.snelstartLogin = true;
    //   this.FacebookLogin=false;
    //   this.MicrosoftLogin=false;
    //   this.GmailLogin=false;
    // }
    
    if(this.auth.isAuthenticated$){
      console.log("is authenticated")
    }
    else{ 
      console.log("is not authenticated")
    }
    console.log(this.auth.isAuthenticated$);
  }

  logout():void{
    // this.microsoftLogout;
    // this.auth.logout({returnTo:this.doc.location.origin});
    // 
    
      // this.socialAuthService.signOut();
      // window.localStorage.removeItem("firebase:session::<host-name>");
    // else{
      this.authService.signOut();
    // }
    localStorage.removeItem('token')
  }

  
}