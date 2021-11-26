import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfpaginaComponent } from './pfpagina.component';

describe('PfpaginaComponent', () => {
  let component: PfpaginaComponent;
  let fixture: ComponentFixture<PfpaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfpaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfpaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
