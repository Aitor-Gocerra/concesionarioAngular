import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CocheService } from 'src/app/services/coche.service';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent {

  listaCoches: any[] = [];
 /*  ----- ANTIGUAS SIN VALIDACIONES ----- */
  /* marca: string = '';
  price: number = 0;
  image: string = ''; */

  /*  ----- NUEVAS CON VALIDACIONES ----- */
  cocheForm = this.formulario.group({
    marca:  ['', [Validators.required, Validators.minLength(2)]],
    precio: [0, [Validators.required, Validators.min(1)]],
    imagen: ['', Validators.required]
  });
  cocheSeleccionado: any = null;

  constructor(private formulario: FormBuilder, private servicioCoche: CocheService ){}

  /* Inicializa la vida del componente */
  /* Eliminar y modificar */
  ngOnInit(){
    this.listaCoches = this.servicioCoche.getCoches();
  }

  addCoche() {
    if (this.cocheForm.invalid) return;

    const datosCoche = this.cocheForm.value;

    const marca  = datosCoche.marca  ?? '';   // si es null/undefined → ''
    const imagen = datosCoche.imagen ?? '';
    const precio = Number(datosCoche.precio) || 0;
    const km = 0; // Valor por defecto para km al añadir un coche

    if (this.cocheSeleccionado) {
      this.servicioCoche.actualizarCoche(
        this.cocheSeleccionado.id,
        marca,
        precio,
        km,
        imagen
      );
      this.cocheSeleccionado = null;
    } else {
      this.servicioCoche.addCoche(marca, precio, km, imagen);
    }
    this.cocheForm.reset({ marca: '', precio: 0, imagen: '' });

  }

  eliminarCoche(coche: any) {
    this.servicioCoche.eliminarCoche(coche.id);
  }

  modificarCoche(coche: any): void {
    this.cocheSeleccionado = coche;
    this.cocheForm.patchValue({
      marca:  coche.marca,
      precio: coche.price,
      imagen: coche.image
    });
  }
}
