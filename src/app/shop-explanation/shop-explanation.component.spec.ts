import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopExplanationComponent } from './shop-explanation.component';

describe('ShopExplanationComponent', () => {
  let component: ShopExplanationComponent;
  let fixture: ComponentFixture<ShopExplanationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopExplanationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
