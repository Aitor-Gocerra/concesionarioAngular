import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocheService {

  /* meter 10 coches con imagenes y que el css se vea, usar el engine force */
  private listaCoches = [
    { id: 1, marca: 'Audi', price: 100000},
    { id: 2, marca: 'Volvo', price: 34789},
    { id: 3, marca: 'Mercedes', price: 73727},
    { id: 4, marca: 'VW', price: 24536}
  ]

  constructor() { }

  getCoches(){
    return this.listaCoches;
  }
}
