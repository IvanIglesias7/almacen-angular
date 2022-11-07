import { Component, OnInit } from '@angular/core';
import { Producto } from '../mock-producto';
import { NgModel } from '@angular/forms';
import { DetalleDeProductoComponent } from '../detalle-de-producto/detalle-de-producto.component';
@Component({
  selector: 'app-listado-de-productos',
  templateUrl: './listado-de-productos.component.html',
  styleUrls: ['./listado-de-productos.component.css']
})
export class ListadoDeProductosComponent implements OnInit {

  productoSeleccionado?: Producto;
onSelect(producto: Producto): void {
  this.productoSeleccionado = producto;
}

  productos: Producto[] = [
    {id: 1, nombre: 'Patatas', precio: 3.0, stock: 100, familia: 'Solanaceae'},
    {id: 2, nombre: 'Tomates', precio: 1.20, stock: 100, familia: 'Frutas'},
    {id: 3, nombre: 'Coliflores', precio: 1.76, stock: 100, familia: 'Verduras'},
    {id: 4, nombre: 'Macarrones', precio: 1.0, stock: 100, familia: 'Pasta'},
    {id: 5, nombre: 'Corn-Flakes', precio: 2.80, stock: 100, familia: 'Cereales'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
