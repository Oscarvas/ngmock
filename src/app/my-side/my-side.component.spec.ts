import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySideComponent } from './my-side.component';

describe('MySideComponent', () => {
  let component: MySideComponent;
  let fixture: ComponentFixture<MySideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
