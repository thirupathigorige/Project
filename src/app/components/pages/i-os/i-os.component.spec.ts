import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IOSComponent } from './i-os.component';

describe('IOSComponent', () => {
  let component: IOSComponent;
  let fixture: ComponentFixture<IOSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IOSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
