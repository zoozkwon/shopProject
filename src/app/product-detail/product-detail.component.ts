import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
items = []; status: any; color: any; shops = [];
  constructor( private route: ActivatedRoute, private APIService: ApiService ) { }

  ngOnInit() {
    this.getShop();

    const product_no = this.route.snapshot.paramMap.get('no');
    console.log(product_no);
    const data = { act: 'datas.procMasterGetProductDetails', shop_no: product_no };

    this.APIService.sendApi(data).then( res => {
      if ( res.error === 0) {
        const datas = res.variables.data;
        for ( let i = 0; i < res.variables.count; i++) {
          if (datas[i].status ==='Y'){
            this.status = '주문 가능';
            this.color = 'blue';
          } else {
            this.status = '매진';
            this.color = 'red';
          }
          this.items.push({
            no : datas[i].no,
            shop_no : datas[i].shop_no,
            product_name : datas[i].product_name,
            price : datas[i].price,
            explanation : datas[i].explanation,
            If : datas[i].status,
            target : datas[i].target,
            status : this.status,
          });
        }
        console.log(this.items);
      }
    });
  }

  getShop() {
    const product_no = this.route.snapshot.paramMap.get('no');
    const data = { act: 'datas.procGetProducts', shop_no: product_no };

    this.APIService.sendApi(data).then( res => {
      if (res.error === 0) {
        this.shops.push(
            res.variables.data
        );
      }
      console.log(this.shops);
    });
  }

  Order() {

  }

  Write() {
    console.log('댓글작성');
  }
}
