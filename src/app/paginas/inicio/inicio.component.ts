import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements AfterViewInit {

  currentSlide = 0; // Índice del slide actual
  slides: HTMLElement[] = []; // Arreglo donde guardamos los elementos del carrusel

  ngAfterViewInit(): void {
    // Obtenemos todos los elementos con la clase .carousel-item y los convertimos en array
    this.slides = Array.from(document.querySelectorAll<HTMLElement>('.carousel-item'));
    this.updateSlide(); // Actualizamos el primer slide

    // Botones de navegación
    const nextBtn = document.querySelector('.next') as HTMLElement;
    const prevBtn = document.querySelector('.prev') as HTMLElement;

    // Evento para botón "Siguiente"
    nextBtn.addEventListener('click', () => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.updateSlide();
    });

    // Evento para botón "Anterior"
    prevBtn.addEventListener('click', () => {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
      this.updateSlide();
    });

    // Carrusel automático cada 5 segundos
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.updateSlide();
    }, 5000);
  }

  updateSlide(): void {
    // Activamos el slide correspondiente y ocultamos el resto
    this.slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === this.currentSlide);
    });
  }
}
