import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../mock-proveedor';
@Component({
  selector: 'app-listado-de-proveedor',
  templateUrl: './listado-de-proveedor.component.html',
  styleUrls: ['./listado-de-proveedor.component.css']
})
export class ListadoDeProveedorComponent implements OnInit {


  proveedorSeleccionado?: Proveedor;
onSelect(proveedor: Proveedor): void {
  this.proveedorSeleccionado = proveedor;
}

  proveedores: Proveedor[] = [
    {id: 1, nombre: 'Enrique Perez', contacto: 'Contacto 1', direccion: 'C/Palo Nº 5', 
    medio: {movil: 67842012, email: 'EnriquePerez@gmail.com'}},
    {id: 2, nombre: 'Paco Lopez', contacto: 'Contacto2', direccion: 'C/Puerta Nº9',
    medio: {movil: 64534231, email: 'PacoLopez@gmail.com'}}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
