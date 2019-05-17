import { Component, OnInit , ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from '../_services/api.service';
import { Router } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  buttons = [];
  @ViewChild('id') id: ElementRef;
  @ViewChild('pass') pass: ElementRef;

  constructor( private APIService: ApiService , private router: Router , public dialog: MatDialog ) { }

  ngOnInit() {
  }

  check( ) {
    if (this.id.nativeElement.value === '') {
      this.buttons = [];
      this.buttons.push({check: 'disabled'});
    } else if (this.pass.nativeElement.value === '') {
      this.buttons = [];
      this.buttons.push({check: 'disabled'});
    } else {
      this.buttons = [];
      this.buttons.push({check: ''});
    }
  }

  Login() {
    const data = {
      act : 'member.procShopUserLogin',
      id : this.id.nativeElement.value,
      pass : this.pass.nativeElement.value,
    };
    this.APIService.loginApi(data).then( res => {
      if (res.error === 0) {
        window.alert('어서오세요.');
        localStorage.setItem('home_users', JSON.stringify(res.variables.users));
        window.location.reload();
      }
    });
  }
  openSign() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(SignupComponent);
    dialogRef.afterClosed();
  }
}
