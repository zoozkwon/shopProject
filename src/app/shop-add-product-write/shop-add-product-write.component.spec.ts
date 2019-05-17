import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAddProductWriteComponent } from './shop-add-product-write.component';

describe('ShopAddProductWriteComponent', () => {
  let component: ShopAddProductWriteComponent;
  let fixture: ComponentFixture<ShopAddProductWriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopAddProductWriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopAddProductWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
