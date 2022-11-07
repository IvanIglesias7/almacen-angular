import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDeProveedorComponent } from './listado-de-proveedor.component';

describe('ListadoDeProveedorComponent', () => {
  let component: ListadoDeProveedorComponent;
  let fixture: ComponentFixture<ListadoDeProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoDeProveedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoDeProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
