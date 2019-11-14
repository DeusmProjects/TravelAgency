import { Component, OnInit } from '@angular/core';
import {Customer} from "../models/customer";
import {AuthService} from "./auth.service";
import { AuthCookie } from "../auth_cookie";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less'],
  providers: [AuthService]
})
export class AuthComponent implements OnInit {

  customerModel: Customer = new Customer();

  constructor(private httpService: AuthService, private cookies: AuthCookie, private router: Router) { }

  ngOnInit() {
    if (this.cookies.getAuth()) {
      this.router.navigate(["/"]);
    }
  }

  signIn() {
    console.log(this.customerModel);

    this.httpService
      .post('http://localhost:5000/customers/auth', this.customerModel)
      .subscribe((result: any) => {
        if (!result) return;
        this.cookies.setAuth(result.token);
        this.cookies.isAdmin = result.isAdmin;
        this.router.navigate(['/']);
      });
  }
}
