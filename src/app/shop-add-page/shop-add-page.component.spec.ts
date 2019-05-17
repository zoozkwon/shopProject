import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAddPageComponent } from './shop-add-page.component';

describe('ShopAddPageComponent', () => {
  let component: ShopAddPageComponent;
  let fixture: ComponentFixture<ShopAddPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopAddPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
