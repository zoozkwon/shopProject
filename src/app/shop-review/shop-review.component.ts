import { Component, OnInit , ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shop-review',
  templateUrl: './shop-review.component.html',
  styleUrls: ['./shop-review.component.css']
})
export class ShopReviewComponent implements OnInit {
GPA: any;
  @ViewChild('name') name: ElementRef;
  @ViewChild('email') email: ElementRef;
  @ViewChild('review') review: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  star(event) {
    this.GPA = event.target.value;
  }

  writeReview() {
    const data = {
      act : 'member.procShopUserLogin',
      name : this.name.nativeElement.value,
      email : this.email.nativeElement.value,
      review : this.review.nativeElement.value,
      GPA : this.GPA
    };
    console.log(data);
  }
}
