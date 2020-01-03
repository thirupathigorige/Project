import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaApplicationComponent } from './java-application.component';

describe('JavaApplicationComponent', () => {
  let component: JavaApplicationComponent;
  let fixture: ComponentFixture<JavaApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
