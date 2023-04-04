import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { login, SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss'],
})
export class SellerAuthComponent implements OnInit {
  showLogin: boolean = false;
  authError: string = '';

  constructor(private seller: SellerService, private router: Router) {}

  ngOnInit() {
    this.seller.reloadSeller();
  }

  openLogin() {
    this.showLogin = true;
  }

  openSignUp() {
    this.showLogin = false;
  }

  login(data: login) {
    this.authError = '';
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError) => {
      if (isError) {
        this.authError = 'Email or password is not correct';
      }
    });
  }

  signUp(data: SignUp): void {
    console.log(data);
    this.seller.userSignUp(data);
  }
}
