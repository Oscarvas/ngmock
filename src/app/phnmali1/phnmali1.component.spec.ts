import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Phnmali1Component } from './phnmali1.component';

describe('Phnmali1Component', () => {
  let component: Phnmali1Component;
  let fixture: ComponentFixture<Phnmali1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Phnmali1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Phnmali1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
