import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QAAutomationComponent } from './qaautomation.component';

describe('QAAutomationComponent', () => {
  let component: QAAutomationComponent;
  let fixture: ComponentFixture<QAAutomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QAAutomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QAAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
