import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { OfertasComponent } from './paginas/ofertas/ofertas.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { CarritoComponent } from './compartidos/carrito/carrito.component';
import { FavoritosComponent } from './compartidos/favoritos/favoritos.component';
import { CompraComponent } from './paginas/compra/compra.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'ofertas', component: OfertasComponent },
  { path: 'contacto', component: ContactoComponent },
  {path:'carrito', component: CarritoComponent},
{path:'favorito',component: FavoritosComponent},
{path:'compra',component:CompraComponent},
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', redirectTo: 'inicio' },
];
