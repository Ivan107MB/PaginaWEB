import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarritoService } from '../../servicios/carrito.service';
import { Producto } from '../../modelos/producto.model';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
//variable que almacena la cantidad total de productos en el carrito
cantidadProductos: number = 0;

//
constructor(private carritoService: CarritoService) {}

//metodo que se ejecuta automaticamente cuando se inicializa el componente
ngOnInit(): void {
  //Nos suscribimos al observable 
  this.carritoService.carrito$.subscribe({

    //
    next: (productos) => {
      //
      //
      this.cantidadProductos = productos.reduce((total, item) => total + item.cantidad, 0);
    },
    //Si ocurre un error durante la suscripcion (Por ejemplo, falla al obtener datos)
    error: (err) => {
      //Se muestra un mensaje de error en la consola para depurar
      console.log('Error al obtener el carrito', err);
      
      //Se asigna 0 como valor por defecto a CantidadProducto en caso de error
      this.cantidadProductos = 0;
    }
  });
}

//
onCarritoClick() {
  console.log('Carrito clicked');
}
}
