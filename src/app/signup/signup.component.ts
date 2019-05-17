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
    if(this.id.nativeElement.value ===''){
      window.alert('ID를 입력해주세요.')
    } else if(this.name.nativeElement.value ===''){
      window.alert('이름을 입력해주세요.')
    } else if(this.pass.nativeElement.value ===''){
      window.alert('비밀번호를 입력해주세요.')
    } else if(this.email.nativeElement.value ===''){
      window.alert('이메일을 입력해주세요.')
    } else {
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
}
