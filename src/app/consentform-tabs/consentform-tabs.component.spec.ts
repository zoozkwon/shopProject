import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentformTabsComponent } from './consentform-tabs.component';

describe('ConsentformTabsComponent', () => {
  let component: ConsentformTabsComponent;
  let fixture: ComponentFixture<ConsentformTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentformTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentformTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
