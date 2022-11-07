import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoDeProductosComponent } from './listado-de-productos/listado-de-productos.component';
import { DetalleDeProductoComponent } from './detalle-de-producto/detalle-de-producto.component';
import { ListadoDeProveedorComponent } from './listado-de-proveedor/listado-de-proveedor.component';
import { DetalleDeProveedorComponent } from './detalle-de-proveedor/detalle-de-proveedor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListadoDeProductosComponent,
    DetalleDeProductoComponent,
    ListadoDeProveedorComponent,
    DetalleDeProveedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
