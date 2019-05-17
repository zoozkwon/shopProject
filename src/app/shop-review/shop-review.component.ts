import { Component, OnInit , ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../_services/api.service';
import { MatDialog} from '@angular/material';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-shop-review',
  templateUrl: './shop-review.component.html',
  styleUrls: ['./shop-review.component.css']
})
export class ShopReviewComponent implements OnInit {
GPA: any; user: any; no: any; disabled : any; username: any; useremail: any; reviews = []; prev_pages: any;
page : number; class: any; next_pages: any; totalpage: any; prev_class: any; next_class: any; pagenation_class: any;
pagenation = []; number: number;
  @ViewChild('name') name: ElementRef;
  @ViewChild('email') email: ElementRef;
  @ViewChild('review') review: ElementRef;
  constructor(  private route: ActivatedRoute,
                private APIService: ApiService,
                public dialog: MatDialog, ) { }

  ngOnInit() {
    this.page = 1;
    this.route.queryParams.subscribe((params: Params) => {
      this.no = params['n'];
    });
    if(localStorage.getItem('home_users') !== null) {
      this.user = JSON.parse(localStorage.getItem('home_users'));
      this.username = this.user.name;
      this.useremail = this.user.email;
      this.disabled = true;
    }
    this.getShopReviews();
  }

  getShopReviews(){
    const data = {
      act : 'datas.procGetShopReviews',
      no : this.no,
      page : this.page
    };
    this.APIService.sendApi(data).then( res => {
      if (res.error === 0) {
        this.reviews = [];
        for(let i = 0; i < res.variables.count; i ++) {
          this.reviews.push(
              res.variables.data[i]
          )
        }
        this.totalpage = res.variables.totalpage;
        this.pagenation = [];
        this.number = 1;
        for(let i = 0; i < this.totalpage; i++){
          if(this.number === this.page) {
            this.pagenation_class = 'active';
          } else {
            this.pagenation_class = '';
          }
            this.pagenation.push({
              page : this.number,
              active_class : this.pagenation_class
            });
          this.number += 1;
        }
        if(this.page === 1){
          this.prev_pages = 'disabled';
          this.prev_class = '';
        } else {
          this.prev_pages = '';
          this.prev_class = 'pagination_active';
        }
        if(this.page === res.variables.totalpage) {
          this.next_pages = 'disabled';
          this.next_class = '';
        } else {
          this.next_pages = '';
          this.next_class = 'pagination_active';
        }
        console.log(this.page);
      }
    });
  }

  star(event) {
    this.GPA = event.target.value;
  }

  writeReview() {
    if(this.GPA === ''){
      window.alert('별점을 선택해주세요')
    }
    else if(localStorage.getItem('home_users') === null){
      const data = {
        act : 'datas.procUserWriteReview',
        no : 0,
        id : 'NPC',
        name : this.name.nativeElement.value,
        email : this.email.nativeElement.value,
        review : this.review.nativeElement.value,
        shop_no : this.no,
        GPA : this.GPA
      };
    } else {
      const data = {
        act : 'datas.procUserWriteReview',
        no : this.user.no,
        id : this.user.id,
        name : this.user.name,
        email : this.user.email,
        review : this.review.nativeElement.value,
        shop_no : this.no,
        GPA : this.GPA
      };
      console.log(data);
      this.APIService.sendApi(data).then( res => {
        if (res.error === 0) {
          if(res.variables.data === 0){
            console.log(res);
          }
        }
      });
    }
  }

  move_prev_pages(){
    if(this.page !== 1){
      this.page -= 1;
      this.getShopReviews();

      let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
          window.scrollTo(0, pos - 20); // how far to scroll on each step
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 16);
    }

  }

  move_next_pages(){
    if(this.page !== this.totalpage){
      this.page += 1;
      this.getShopReviews();

      let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
          window.scrollTo(0, pos - 20); // how far to scroll on each step
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 16);
    }

  }


  openLogin() {
    const dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed();
  }

}
