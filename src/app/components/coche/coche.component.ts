import { Component } from '@angular/core';
import { CocheService } from 'src/app/services/coche.service';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent {

  listaCoches: any[] = [];
  constructor(private servicioCoche: CocheService ){}

  /* Inicializa la vida del componente */
  ngOnInit(){
    this.listaCoches = this.servicioCoche.getCoches();
  }
}
