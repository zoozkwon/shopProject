import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consentform',
  templateUrl: './consentform.component.html',
  styleUrls: ['./consentform.component.css']
})
export class ConsentformComponent implements OnInit {
  tab1s = []; tab2s = []; tab3s = [];
  no: any;
  constructor(  private route: ActivatedRoute ) { }

  ngOnInit() {
    this.no = this.route.snapshot.paramMap.get('no');
    console.log(this.route.snapshot.paramMap.get('no'));
    if (this.no === '1') {
      this.tabs1();
    } else if (this.no === '2') {
      this.tabs2();
    } else if (this.no === '3') {
      this.tabs3();
    }
  }
  tabs1() {
    this.tab1s = [];
    this.tab1s.push({
      classes : 'disabled',
      active : 'active'
    });
    this.tab2s = [];
    this.tab3s = [];
    this.tab2s.push({
      classes : '' ,
      hide : ''
    });
    this.tab3s.push({
      classes : '' ,
      hide : ''
    });
  }
  tabs2() {
    this.tab2s = [];
    this.tab2s.push({
      classes : 'disabled',
      active : 'active',
      hide : ''
    });
    this.tab1s = [];
    this.tab3s = [];
    this.tab1s.push({
      classes : '' ,
      hide : 'hide',
    });
    this.tab3s.push({
      classes : '' ,
      hide : 'hide',
    });
  }
  tabs3() {
    this.tab3s = [];
    this.tab3s.push({
      classes : 'disabled',
      active : 'active',
      hide : '',
    });
    this.tab2s = [];
    this.tab1s = [];
    this.tab2s.push({
      classes : '' ,
      hide : 'hide',
    });
    this.tab1s.push({
      classes : '' ,
      hide : 'hide',
    });
  }
}
