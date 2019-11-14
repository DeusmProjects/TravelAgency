import { Component, OnInit } from '@angular/core';
import {Customer} from "../models/customer";
import {RegistrationService} from "./registration.service";
import {Router} from "@angular/router";
import {AuthCookie} from "../auth_cookie";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less'],
  providers: [RegistrationService]
})
export class RegistrationComponent implements OnInit {

  customerModel : Customer = new Customer();

  constructor(private router : Router, private httpService: RegistrationService, private cookies: AuthCookie) { }

  ngOnInit() {
    if (this.cookies.getAuth()) {
      this.router.navigate(["/"]);
    }
  }

  signUp() {
    console.log(this.customerModel);

    this.httpService
      .post('http://localhost:5000/customers/reg', this.customerModel)
      .subscribe((result) => {
        if (!result) return;
        this.cookies.setAuth(result.token);
        this.cookies.isAdmin = result.isAdmin;
        this.router.navigate(['/']);
      });
  }
}
