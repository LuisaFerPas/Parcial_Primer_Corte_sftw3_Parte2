import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarra } from './nav-barra';

describe('NavBarra', () => {
  let component: NavBarra;
  let fixture: ComponentFixture<NavBarra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarra);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
