import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocheService {

  /* meter 10 coches con imagenes y que el css se vea, usar el engine force */
  private listaCoches = [
    { id: 1, marca: 'Audi', price: 100000, image: 'https://cdn-xy.drivek.com/eyJidWNrZXQiOiJkYXRhay1jZG4teHkiLCJrZXkiOiJjb25maWd1cmF0b3ItaW1ncy9jYXJzL2VzL29yaWdpbmFsL0FVREkvUlMtNy1TUE9SVEJBQ0svMzg4ODdfSEFUQ0hCQUNLLTUtRE9PUlMvYXVkaS1ycy03LXNwb3J0YmFjay0yMDE5LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAyNCwiaGVpZ2h0IjpudWxsLCJmaXQiOiJjb3ZlciJ9fX0='},
    { id: 2, marca: 'Volvo', price: 34789, image: 'https://images.unsplash.com/photo-1620882148782-b43a99283738?auto=format&fit=crop&w=500&q=60'},
    { id: 3, marca: 'Mercedes', price: 73727, image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=500&q=60'},
    { id: 4, marca: 'VW', price: 24536, image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=500&q=60'}
  ]

  constructor() { }

  getCoches(){
    return this.listaCoches;
  }

  addCoche(marca: string, price: number, image: string) {
    const newCoche = {
      id: this.listaCoches.length + 1, 
      marca: marca, 
      price: price, 
      image: image || 'https://via.placeholder.com/150'};
    
      this.listaCoches.push(newCoche);
  }

  eliminarCoche(id: number) {
    const indice = this.listaCoches.findIndex(coche => coche.id === id);
    
    if(indice != -1) {
      this.listaCoches.splice(indice, 1);
    }
  }

  // Añadir dentro de la clase CocheService
actualizarCoche(id: number, marca: string, price: number, image: string) {
  // Buscamos la posición del coche en el array
  const indice = this.listaCoches.findIndex(c => c.id === id);
  
  if (indice !== -1) {
    // Si existe, actualizamos sus datos
    this.listaCoches[indice].marca = marca;
    this.listaCoches[indice].price = price;
    this.listaCoches[indice].image = image;
  }
}
}
