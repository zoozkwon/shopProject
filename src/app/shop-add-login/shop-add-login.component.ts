import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
@Component({
  selector: 'app-shop-add-login',
  templateUrl: './shop-add-login.component.html',
  styleUrls: ['./shop-add-login.component.css']
})
export class ShopAddLoginComponent implements OnInit {

  constructor(  public dialog: MatDialog  ) { }

  ngOnInit() {
  }

  openLogin() {
    const dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed();
  }
  openSign() {
    const dialogRef = this.dialog.open(SignupComponent);
    dialogRef.afterClosed();
  }
}
