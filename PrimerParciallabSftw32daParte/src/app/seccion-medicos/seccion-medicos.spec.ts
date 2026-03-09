import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionMedicos } from './seccion-medicos';

describe('SeccionMedicos', () => {
  let component: SeccionMedicos;
  let fixture: ComponentFixture<SeccionMedicos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionMedicos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionMedicos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
