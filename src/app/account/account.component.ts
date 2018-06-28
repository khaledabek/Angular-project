import { Component, OnInit } from '@angular/core';
import { User } from './../shared/models/account-models/index';
import { AccountService } from './../shared/services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  isLogedIn;
  tabState: string;
  user: User;
  constructor(public accountService: AccountService) { }


  logOutUser(): void {
    this.tabState = 'Logout'
    this.accountService.logout();
  }
  ngOnInit() {
    this.tabState = (!this.accountService.isLogedIn.state) ? 'Login' : 'Logout';
    this.user = this.accountService.globalUser;
    this.isLogedIn = this.accountService.isLogedIn;

    this.accountService.userEventEmitter.subscribe((x) => {
      this.tabState = (!this.accountService.isLogedIn.state) ? 'Login' : 'Logout';
    })
  }

}
