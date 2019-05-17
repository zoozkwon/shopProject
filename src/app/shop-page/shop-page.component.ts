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
soloshop = []; listing: any; no: any; listing_type: any; images = []; test: any;
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
    console.log(data);
    this.APIService.sendApi(data).then( res => {
      console.log(res);
      if (res.error === 0) {
        const soloshop = res.variables.data;
        console.log(soloshop);
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
  good() {
    if (localStorage.getItem('home_users') === null) {
      this.openLogin();
    } else {
      console.log('굳');
    }
  }
  openLogin() {
    const dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed();
  }
}
