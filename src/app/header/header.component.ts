import { Component, OnInit } from '@angular/core';
import {AuthCookie} from "../auth_cookie";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(public cookies : AuthCookie, private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.cookies.deleteAuth();
    this.router.navigate(['/']);
  }

}
