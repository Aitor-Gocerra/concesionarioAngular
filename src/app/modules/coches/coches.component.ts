import { Component } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { CocheService } from 'src/app/services/coche.service';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent {

  listaCoches: any[] = [];

  extrasDisponibles: string[] = ['GPS', 'Aire Acondicionado', 'Techo Solar', 'Asientos Cuero', 'Sensores' ]
 /*  ----- ANTIGUAS SIN VALIDACIONES ----- */
  /* marca: string = '';
  price: number = 0;
  image: string = ''; */

  /*  ----- NUEVAS CON VALIDACIONES ----- */
  cocheForm = this.formulario.group({
    marca:  ['', [Validators.required, Validators.minLength(2)]],
    precio: [0, [Validators.required, Validators.min(1)]],
    imagen: ['', Validators.required],
    extras: this.formulario.array([])
  });
  cocheSeleccionado: any = null;

  constructor(private formulario: FormBuilder, private servicioCoche: CocheService ){}

  /* Inicializa la vida del componente */
  /* Eliminar y modificar */
  ngOnInit(){
    this.listaCoches = this.servicioCoche.getCoches();
  }

  // 4. Método para manejar el cambio en los checkboxes
  onCheckboxChange(elemento: any) {
    const extras: FormArray = this.cocheForm.get('extras') as FormArray;

    if (elemento.target.checked) {
      // Si se marca, añadimos el valor al array
      extras.push(new FormControl(elemento.target.value));
    } else {
      // Si se desmarca, buscamos el índice y lo quitamos
      let i: number = 0;
      extras.controls.forEach((item: any) => {
        if (item.value == elemento.target.value) {
          extras.removeAt(i);
          return;
        }
        i++;
      });
    }
  }


  addCoche() {
    if (this.cocheForm.invalid) return;

    const datosCoche = this.cocheForm.value;

    const marca  = datosCoche.marca  ?? '';   // si es null/undefined → ''
    const imagen = datosCoche.imagen ?? '';
    const precio = Number(datosCoche.precio) || 0;
    const km = 0; // Valor por defecto para km al añadir un coche
    const extras = this.cocheForm.value.extras || []; 

    if (this.cocheSeleccionado) {
      this.servicioCoche.actualizarCoche(
        this.cocheSeleccionado.id,
        marca,
        precio,
        km,
        imagen,
        extras
      );
      this.cocheSeleccionado = null;
    } else {
      this.servicioCoche.addCoche(marca, precio, km, imagen, extras);
    }
    this.cocheForm.reset({ marca: '', precio: 0, imagen: '' });
    (this.cocheForm.get('extras') as FormArray).clear();

  }

  eliminarCoche(coche: any) {
    this.servicioCoche.eliminarCoche(coche.id);
  }

  modificarCoche(coche: any): void {
    this.cocheSeleccionado = coche;
    //Lógica especial para rellenar los checkboxes al editar
    const extrasFormArray = this.cocheForm.get('extras') as FormArray;
    extrasFormArray.clear(); // Limpiamos anteriores

    if (coche.extras) {
      coche.extras.forEach((extra: string) => {
        extrasFormArray.push(new FormControl(extra));
      });
    }

    this.cocheForm.patchValue({
      marca:  coche.marca,
      precio: coche.price,
      imagen: coche.image
    });
  }
}
