import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  login = false;
  constructor( public dialog: MatDialog  ) {
    if ( localStorage.getItem('home_users') === null) {
      this.login = false;
    } else {
      this.login = true;
    }
  }

  LogOut() {
    localStorage.removeItem('home_users');
    this.login = false;
    window.location.reload();
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
