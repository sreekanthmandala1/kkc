import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styles: [
  ]
})
export class SocialLoginComponent implements OnInit {

  constructor(public auth:AuthService) {}

  ngOnInit(): void {
    if(this.auth.isAuthenticated$){
      console.log("is authenticated")
    }
    else{ 
      console.log("is not authenticated")
    }
    console.log(this.auth.isAuthenticated$);
  }
  loginWithRedirect():void{
    localStorage.setItem('Blog', "");
    localStorage.setItem('Provider', "");
    this.auth.loginWithRedirect();
    }
}
