import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDeProveedorComponent } from './detalle-de-proveedor.component';

describe('DetalleDeProveedorComponent', () => {
  let component: DetalleDeProveedorComponent;
  let fixture: ComponentFixture<DetalleDeProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleDeProveedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleDeProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
