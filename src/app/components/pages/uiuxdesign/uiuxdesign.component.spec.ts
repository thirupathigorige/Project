import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UIUXDesignComponent } from './uiuxdesign.component';

describe('UIUXDesignComponent', () => {
  let component: UIUXDesignComponent;
  let fixture: ComponentFixture<UIUXDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UIUXDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UIUXDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
