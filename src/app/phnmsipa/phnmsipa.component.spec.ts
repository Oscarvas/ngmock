import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhnmsipaComponent } from './phnmsipa.component';

describe('PhnmsipaComponent', () => {
  let component: PhnmsipaComponent;
  let fixture: ComponentFixture<PhnmsipaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhnmsipaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhnmsipaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
