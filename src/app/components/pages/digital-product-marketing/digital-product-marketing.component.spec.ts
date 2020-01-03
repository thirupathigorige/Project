import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalProductMarketingComponent } from './digital-product-marketing.component';

describe('DigitalProductMarketingComponent', () => {
  let component: DigitalProductMarketingComponent;
  let fixture: ComponentFixture<DigitalProductMarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalProductMarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalProductMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
