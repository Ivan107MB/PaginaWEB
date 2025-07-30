import { Component } from '@angular/core';
import { CarritoService } from '../../servicios/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FavoritoService } from '../../servicios/favorito.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'Mk 9',
      descripcion: 'Peleas',
      precio: 53940,
      imagen: '/mk9.jpeg',
      disponibilidad: true
    },
    {
      id: 2,
      nombre: 'Grand Theft Auto IV',
      descripcion: 'mundo abierto.',
      precio: 35000,
      imagen: '/gta4.jpeg',
      disponibilidad: true
    },
    {
      id: 3,
      nombre: 'MK X',
      descripcion: 'Peleas',
      precio: 26999.00,
      imagen: '/mkx.webp',
      disponibilidad: true
    },
    {
      id: 4,
      nombre: 'Fall Guys',
      descripcion: 'Battle Royale.',
      precio: 12999.88,
      imagen: '/fallguys.jpeg',
      disponibilidad: true
    },
    {
      id: 5,
      nombre: 'Grand Theft Auto: San Andreas',
      descripcion: 'Mundo Abierto',
      precio:  3999.99,
      imagen: 'gtasanandreas.jpg',
      disponibilidad: true
    },
    {
      id: 6,
      nombre: 'FIFA16',
      descripcion: 'Deportes',
      precio: 15.000,
      imagen: 'fifa16.avif',
      disponibilidad: true
    }

  ];
  //Constructor donde inyectamos el servicio del carrito
  constructor(private carritoService: CarritoService, private favoritoService: FavoritoService) {}

  //Método para agregar un producto al carrito
  agregar(producto: Producto) {
    //Llama al método del servicio para agregar el producto al carrito
    this.carritoService.agregarAlCarrito(producto);

    //Muestra un mensaje de confirmacion al usuario
    alert('Producto agregado al carrito')
  }
  agregarAFav(producto: Producto) {
    this.favoritoService.agregarAFavoritos(producto);
    alert ('Producto agregado a favorito')
  }
}
