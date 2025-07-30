import { Component } from '@angular/core';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarritoService } from '../../servicios/carrito.service';
import { FavoritoService } from '../../servicios/favorito.service';

@Component({
  selector: 'app-ofertas',
  imports: [CommonModule, RouterModule],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent {
  Ofertas: Producto [] = [
    {
      id: 1,
      nombre: 'MK 1',
      descripcion: 'Peleas',
      precio: 140799.99,
      imagen: '/mk1.jpeg',
      disponibilidad: true
    },
    {
      id: 2,
      nombre: 'Red Dead redemption 2    ',
      descripcion: 'Aventura y Mundo abierto',
      precio: 82365,
      imagen: '/Rdr2.jpeg',
      disponibilidad: true
    },
    {
      id: 3,
      nombre: 'FIFA22',
      descripcion: 'Deporte',
      precio: 29058.99,
      imagen: '/fifa22.jpg',
      disponibilidad: true
    },
    {
      id: 4,
      nombre: 'PES2018 ',
      descripcion: 'Deporte',
      precio: 19950,
      imagen: '/pes2018.png',
      disponibilidad: true
    },
    {
      id: 5,
      nombre: 'Plants vs Zombies: Garden Warfare ',
      descripcion: 'Battle Royale',
      precio: 32290,
      imagen: '/pvzgardenwarfare.jpeg',
      disponibilidad: true
    },
    {
      id: 6,
      nombre: 'Grand Theft Auto V',
      descripcion: 'Mundo Abierto+',
      precio: 40250,
      imagen: '/Gta5.jpeg',
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
