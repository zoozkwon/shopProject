import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAddLoginComponent } from './shop-add-login.component';

describe('ShopAddLoginComponent', () => {
  let component: ShopAddLoginComponent;
  let fixture: ComponentFixture<ShopAddLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopAddLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopAddLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
