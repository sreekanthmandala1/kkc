import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styles: [
  ]
})
export class UserImageComponent implements OnInit {
  profileJson:string=null;

  username:string;
  constructor(public auth:AuthService,@Inject(DOCUMENT) private doc:Document,private activatedroute: ActivatedRoute,) {
    this.activatedroute.queryParams.subscribe(data => {
     
      this.username=data.name;
    })
   }

  ngOnInit(): void {
    
  }
  logout():void{
    localStorage.setItem('Blog', "");
    localStorage.setItem('Provider', "");
    this.auth.logout({returnTo:this.doc.location.origin});
  }
  profile()
  {
    this.auth.user$.subscribe(
      (profile)=>(this.profileJson=JSON.stringify(profile,null,2))
    );
  }

}
