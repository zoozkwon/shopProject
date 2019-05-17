import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { MatDialog} from '@angular/material';
import { LoginComponent } from '../login/login.component';

import {MapsAPILoader} from '@agm/core';
import PlaceResult = google.maps.places.PlaceResult;
import GeocoderRequest = google.maps.GeocoderRequest;

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {
soloshop = []; listing: any; no: any; listing_type: any; images = []; test: any; like: number; color: any;
  images1: Array<string> = ['http://cfile25.uf.tistory.com/image/2711C13D5805FE99214C15', 'http://cfile1.uf.tistory.com/image/240B353D5805FE9A2760D9'];
  constructor( private route: ActivatedRoute,
               private APIService: ApiService,
               public dialog: MatDialog,
               private mapsAPILoader: MapsAPILoader ) { }
item = [];
  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.listing_type = params['listing_type'];
      this.listing = params['listing'];
      this.no = params['n'];
    });
    console.log(this.listing);
    console.log(this.no);
    this.getSoloShops();
    if (localStorage.getItem('home_users') !== null) {
      this.getShopsLike();
    } else {
      this.like = 0;
    }
    //google maps
    this.mapsAPILoader.load().then(() => {
          const bounds = new google.maps.LatLngBounds(
              new google.maps.LatLng(54.69726685890506, -2.7379201682812226),
              new google.maps.LatLng(55.38942944437183, -1.2456105979687226)
          );
        }
    );
  }

  getSoloShops() {
    const data = {
      act : 'datas.procGetShop',
      shop_no : this.no,
      listing_type : this.listing_type
    };
    this.APIService.sendApi(data).then( res => {
      if (res.error === 0) {
        const soloshop = res.variables.data;
        this.soloshop.push(
            soloshop
        );

        this.images.push(
            'http://cfile25.uf.tistory.com/image/2711C13D5805FE99214C15',
            'http://cfile1.uf.tistory.com/image/240B353D5805FE9A2760D9'
        );
        console.log(this.images);
        console.log(this.images1);
      }
    });
  }

  getShopsLike(){
    const users = JSON.parse(localStorage.getItem('home_users'));
    const data = {
      act : 'datas.procGetShopLikes',
      shop_no : this.no,
      user_no : users.no,
    };
    this.APIService.sendApi(data).then( res => {
      if (res.error === 0) {
        if(res.variables.data === 0){
          this.like = 0;
        } else {
          this.like = 1;
          this.color = 'pink';
        }
      }
    });
  }

  good() {
    if (localStorage.getItem('home_users') === null) {
      this.openLogin();
    } else {
      const users = JSON.parse(localStorage.getItem('home_users'));
      const data = {
        act : 'datas.procShopLikes',
        user_no : users.no,
        user_id : users.id,
        shop_no : this.no,
        type : this.like
      };
      this.APIService.sendApi(data).then( res => {
        if (res.error === 0) {
          if(this.like === 0) {
            this.color = 'pink';
            this.like = 1;
          } else {
            this.color = '';
            this.like = 0;
          }
        }
      });
    }
  }

  openLogin() {
    const dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed();
  }
}
