import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss'],
})
export class SellerAuthComponent implements OnInit {
  showLogin = false;

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

  login(data: any) {
    console.log('login', data);
  }

  signUp(data: SignUp): void {
    console.log(data);
    this.seller.userSignUp(data);
  }
}
