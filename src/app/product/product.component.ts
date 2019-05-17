import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  items = []; pages = []; page: any; totalpage: any; prev_page_class: any; naxt_page_class: any;
  prev_pages = []; next_pages = [];
  class: any; naxt_page: any; prev_page: any;

  constructor(  private APIService: ApiService , private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit() {
    this.GetProductApp();
  }
  GetProductApp() {
    this.page = this.route.snapshot.paramMap.get('no');
    const data = {act: 'datas.procMasterGetProducts', page : this.page};
    console.log(data);
    this.APIService.sendApi(data).then( data => {
      const Products = data.variables.data;
      this.totalpage = data.variables.totalpage ;
      this.items = [];
      for (let i = 0; i < Products.length ; i++) {
        this.items.push(
            Products[i]
        );
      }
      for ( let j = 0; j < data.variables.totalpage; j++) {
        const page = String(j + 1);
        if ( this.page === page ) {
          this.class = 'active';
        } else {
          this.class = 'waves-effect';
        }
        this.pages.push({
          page : page ,
          li_class : this.class
        });
      }
      console.log(this.pages);
      this.naxt_page = this.page + 1;
      this.prev_page = this.page - 1;

      if (this.naxt_page >= this.totalpage ) {
        this.naxt_page_class = 'disabled';
      } else {
        this.naxt_page_class = 'waves-effect';
      }
      this.next_pages.push({
        next_pages : this.naxt_page_class
      });
      if (this.prev_page <= 0 ) {
        this.prev_page_class = 'disabled';
      } else {
        this.prev_page_class = 'waves-effect';
      }
      this.prev_pages.push({
        prev_pages : this.prev_page_class
      });
    });
  }

  prevPage() {
    if (this.prev_page_class === 'waves-effect') {
      this.router.navigate(['/main/Product', this.prev_page ]);
    }
  }

  nextPage() {
    if (this.naxt_page_class === 'waves-effect') {
      this.router.navigate(['/main/Product', this.naxt_page ]);
    }
  }
  movePage( event , page) {
    this.router.navigate(['/main/Product', page.page ]);
  }
}
