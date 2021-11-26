import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhnmaliaComponent } from './phnmalia.component';

describe('PhnmaliaComponent', () => {
  let component: PhnmaliaComponent;
  let fixture: ComponentFixture<PhnmaliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhnmaliaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhnmaliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
