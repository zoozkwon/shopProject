import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAddProductComponent } from './shop-add-product.component';

describe('ShopAddProductComponent', () => {
  let component: ShopAddProductComponent;
  let fixture: ComponentFixture<ShopAddProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopAddProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
