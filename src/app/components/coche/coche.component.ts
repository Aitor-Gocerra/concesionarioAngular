import { Component } from '@angular/core';
import { CocheService } from 'src/app/services/coche.service';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent {

  listaCoches: any[] = [];
  marca: string = '';
  price: number = 0;
  image: string = '';
  cocheSeleccionado: any = null;

  constructor(private servicioCoche: CocheService ){}

  /* Inicializa la vida del componente */
  /* Eliminar y modificar */
  ngOnInit(){
    this.listaCoches = this.servicioCoche.getCoches();
  }

  addCoche() {
    if(this.marca.trim() && this.price > 0 && this.image.trim()) {
      if (this.cocheSeleccionado) {
      // --- MODO EDICIÓN ---
      // Llamamos al nuevo método del servicio
      this.servicioCoche.actualizarCoche(
        this.cocheSeleccionado.id, 
        this.marca, 
        this.price, 
        this.image
      );
      this.cocheSeleccionado = null; // Salimos del modo edición
    } else {
      // --- MODO CREACIÓN ---
      this.servicioCoche.addCoche(this.marca, this.price, this.image);
    }

    // Limpiamos el formulario (común para ambos casos)
    this.marca = '';
    this.price = 0;
    this.image = '';
    }
  }

  eliminarCoche(coche: any) {
    this.servicioCoche.eliminarCoche(coche.id);
  }

  modificarCoche(coche: any) {
    this.cocheSeleccionado = coche; // Guardamos el coche que estamos editando
  
    // Rellenamos el formulario con sus datos
    this.marca = coche.marca;
    this.price = coche.price;
    this.image = coche.image;
  }
}
