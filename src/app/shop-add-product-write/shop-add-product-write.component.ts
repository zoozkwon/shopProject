import { Component, OnInit , ViewChild, ElementRef } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-shop-add-product-write',
  templateUrl: './shop-add-product-write.component.html',
  styleUrls: ['./shop-add-product-write.component.css']
})
export class ShopAddProductWriteComponent implements OnInit {
  @ViewChild('shopcategory') shopcategory: ElementRef;
  @ViewChild('shop_name') shop_name: ElementRef;
  @ViewChild('sub_title') sub_title: ElementRef;
  @ViewChild('shop_options') shop_options: ElementRef;
  @ViewChild('shop_content') shop_content: ElementRef;
  @ViewChild('Tel') Tel: ElementRef;
  @ViewChild('kakao_talk') kakao_talk: ElementRef;
  @ViewChild('blog') blog: ElementRef;
  @ViewChild('price') price: ElementRef;
  @ViewChild('op_time') op_time: ElementRef;
  @ViewChild('place') place: ElementRef;
  @ViewChild('sis') sis: ElementRef;
  @ViewChild('gus') gus: ElementRef;
  @ViewChild('pp') pp: ElementRef;

  items = []; type: any; new: any; product_no: any; Dos = []; Gus = [];
  logo: any; image = []; cover: any; gall: any;
  constructor( private activatedRoute: ActivatedRoute ,
               private APIService: ApiService,
               private router: Router) {

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.type = params['listing_type'];
      this.product_no = params['P'];
    });

  }

  ngOnInit() {
    this.get_citys();
    this.Directory();
  }

  get_citys() {
    const data = {act: 'datas.procGet_Si'};
    this.APIService.sendApi(data).then( res => {
      const city = res.variables;
      for (let i = 0; i < city.count ; i++) {
        this.Dos.push(
            city.data[i]
        );
      }
    });
  }

  selectSi() {
    const data = {act: 'datas.procGet_Gu' , si : this.sis.nativeElement.value};
    this.APIService.sendApi(data).then( res => {
      const gu = res.variables;
      this.Gus = [];
      for (let i = 0; i < gu.count ; i++) {
        this.Gus.push(
            gu.data[i]
        );
      }
    });
  }

  Directory() {
    const data = {act: 'datas.procDirectory'};
    this.APIService.sendApi(data).then( data => {
      const Directorys = data.variables.data;
      if (this.items['id'] !== '') {
        this.items = [];
      }
      for (let i = 0; i < Directorys.length ; i++) {
        this.items.push({
          id : Directorys[i].id,
          no : Directorys[i].no ,
          name: Directorys[i].name
        });
      }
    });
  }
  selectChangeHandler(event) {

    console.log(this.shopcategory.nativeElement.value);
  }

  create() {
    if ( this.shopcategory.nativeElement.value === '') {
      window.alert('샵 카테고리를 선택 해주세요.');
    } else if ( this.shop_name.nativeElement.value === '') {
      window.alert('샵 이름을 입력 해주세요.');
    } else if ( this.sis.nativeElement.value === '') {
      window.alert('샵이 위치한 도,시 를 선택 해주세요.');
    } else if ( this.gus.nativeElement.value === '') {
      window.alert('샵이 위치한 군,구 를 선택 해주세요.');
    } else if ( this.shop_name.nativeElement.value !== '' ) {
      const data = {
        act : 'datas.procCheckedShopName',
      };
      this.APIService.sendApi(data).then( res => {
        if ( res.error === -1) {
          window.alert(res.message);
        } else {
          const users = JSON.parse(localStorage.getItem('home_users'));
          const datas = {
            act : 'datas.procCreateUsersShop',
            manager_no : users.no,
            id : users.id,
            manager_name : users.name,
            shop_name: this.shop_name.nativeElement.value,
            si: this.sis.nativeElement.value,
            gu: this.gus.nativeElement.value,
            adress: this.place.nativeElement.value,
            category: this.shopcategory.nativeElement.value,
            Product_No : this.product_no,
            sub_title: this.sub_title.nativeElement.value,
            shop_options: this.shop_options.nativeElement.value,
            shop_content: this.shop_content.nativeElement.value,
            mobile: this.Tel.nativeElement.value,
            kakao_talk: this.kakao_talk.nativeElement.value,
            blog: this.blog.nativeElement.value,
            price: this.price.nativeElement.value,
            op_time: this.op_time.nativeElement.value,
            shop_category : this.type,
          };
          console.log(datas);
          const data = {act: 'datas.procCreateUsersShop' , data : datas};
          this.APIService.sendApi(data).then( res => {
            const gu = res.variables;
            this.Gus = [];
            for (let i = 0; i < gu.count ; i++) {
              this.Gus.push(
                  gu.data[i]
              );
            }
          });
        }
      });
    }
  }

  selectLogoFile(event): void {
    this.logo = event.target.files[0];
    console.log(this.logo);
  }

  selectCoverFile(event): void {
    this.cover = event.target.files[0];
    console.log(this.cover);
  }

  selectGallFile(event): void {
    this.gall = event.target.files[0];
    console.log(this.gall);
  }
}
