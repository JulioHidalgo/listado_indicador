import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadorMensualComponent } from './indicador-mensual.component';

describe('NuevoDestinatarioComponent', () => {
  let component: IndicadorMensualComponent;
  let fixture: ComponentFixture<IndicadorMensualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicadorMensualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicadorMensualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
