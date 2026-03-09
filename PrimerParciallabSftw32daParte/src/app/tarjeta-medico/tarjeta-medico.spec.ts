import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaMedico } from './tarjeta-medico';

describe('TarjetaMedico', () => {
  let component: TarjetaMedico;
  let fixture: ComponentFixture<TarjetaMedico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaMedico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaMedico);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
