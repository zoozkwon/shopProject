import { Component, OnInit , ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../_services/api.service';
import {MatDialog, matDialogAnimations} from '@angular/material';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('id') id: ElementRef;
  @ViewChild('name') name: ElementRef;
  @ViewChild('pass') pass: ElementRef;
  @ViewChild('email') email: ElementRef;
  constructor( private APIService: ApiService , public dialog: MatDialog  ) {
  }

  ngOnInit() {
  }

  SignUp() {
    const data = {
      act : 'member.procShopUserSignUp',
      id : this.id.nativeElement.value,
      name : this.name.nativeElement.value,
      pass : this.pass.nativeElement.value,
      email : this.email.nativeElement.value,
    };
    this.APIService.sendApi(data).then( res => {
      if (res.error === 0) {
        window.alert('회원가입이 완료 되었습니다. 로그인을 진행 해주세요.');
        this.dialog.closeAll();
      }
    });
  }
}
