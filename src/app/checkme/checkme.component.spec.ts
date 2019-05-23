import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckmeComponent } from './checkme.component';

describe('CheckmeComponent', () => {
  let component: CheckmeComponent;
  let fixture: ComponentFixture<CheckmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
