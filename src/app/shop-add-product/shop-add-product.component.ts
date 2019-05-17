import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ShopAddLoginComponent } from '../shop-add-login/shop-add-login.component';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-shop-add-product',
  templateUrl: './shop-add-product.component.html',
  styleUrls: ['./shop-add-product.component.css']
})
export class ShopAddProductComponent implements OnInit {
login = false; products = []; product_write = true; type: any; new:any;
  constructor( private activatedRoute: ActivatedRoute ,
               public dialog: MatDialog ,
               private APIService: ApiService ,
               private router: Router ) {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.type = params['listing_type'];
    });

  }

  ngOnInit() {
    if ( localStorage.getItem('home_users') === null) {
      this.login = false;
    } else {
      this.login = true;
    }
    this.get_shop_proeucts();
  }

  get_shop_proeucts() {
    const data = {act: 'datas.procShopAddProducts', type : this.type};
    this.APIService.sendApi(data).then( res => {
      for (let i = 0; i < res.variables.count ; i ++) {
        this.products.push(
            res.variables.data[i]
        );
      }
    });
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
    };

    const dialogRef = this.dialog.open(ShopAddLoginComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      alert("response: " + result);
    });
  }

  BuyProduct() {

    this.router.navigate(['/main/ShopAddProductWrite']);

  }
}
