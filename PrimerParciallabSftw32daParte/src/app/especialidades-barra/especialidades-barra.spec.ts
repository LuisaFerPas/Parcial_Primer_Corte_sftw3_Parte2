import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadesBarra } from './especialidades-barra';

describe('EspecialidadesBarra', () => {
  let component: EspecialidadesBarra;
  let fixture: ComponentFixture<EspecialidadesBarra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspecialidadesBarra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecialidadesBarra);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
