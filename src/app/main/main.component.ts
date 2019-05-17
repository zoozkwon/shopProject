import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  soloshops = [];
  constructor( private APIService: ApiService , private router: Router ) { }

  ngOnInit() {
    const user = localStorage.getItem('users');
    if ( user !== undefined) {
      console.log(user);
    }
    this.getSoloShops();
  }

  getSoloShops() {
    const data = {
      act : 'datas.procGetSoloShops',
    };
    this.APIService.sendApi(data).then( res => {
      if (res.error === 0) {
        const soloshop = res.variables.data;
        console.log(soloshop);
        for ( let i = 0; i < res.variables.count; i ++) {
         this.soloshops.push(
             soloshop[i]
         );
        }
        console.log(this.soloshops['push']);
      }
    });
  }

}
