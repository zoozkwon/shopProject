import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopEventComponent } from './shop-event.component';

describe('ShopEventComponent', () => {
  let component: ShopEventComponent;
  let fixture: ComponentFixture<ShopEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
