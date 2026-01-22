import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocheService {

  /* meter 10 coches con imagenes y que el css se vea, usar el engine force */
  private listaCoches = [
    { id: 1, marca: 'Audi', price: 100000, km: 85000, image: 'https://cdn-xy.drivek.com/eyJidWNrZXQiOiJkYXRhay1jZG4teHkiLCJrZXkiOiJjb25maWd1cmF0b3ItaW1ncy9jYXJzL2VzL29yaWdpbmFsL0FVREkvUlMtNy1TUE9SVEJBQ0svMzg4ODdfSEFUQ0hCQUNLLTUtRE9PUlMvYXVkaS1ycy03LXNwb3J0YmFjay0yMDE5LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAyNCwiaGVpZ2h0IjpudWxsLCJmaXQiOiJjb3ZlciJ9fX0=', extras: ['GPS', 'Techo Solar']},
    { id: 2, marca: 'Volvo', price: 34789, km: 12000, image: 'https://fotos.quecochemecompro.com/volvo-xc90-hibrido/volvo-xc90-hibrido-trasero.jpg?size=750x400', extras: ['Sensores']},
    { id: 3, marca: 'Mercedes', price: 73727, km: 45000, image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=500&q=60', extras: []},
    { id: 4, marca: 'VW', price: 24536, km: 65000, image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=500&q=60', extras: []},
    { id: 5, marca: 'BMW', price: 55000, km: 92000, image: 'https://img.goodfon.com/wallpaper/big/0/3f/bwm-m2-car-road-speed.webp', extras: []},
    { id: 6, marca: 'Tesla', price: 48900, km: 22567, image: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&w=500&q=60', extras: []},
    { id: 7, marca: 'Porsche', price: 125000, km: 0, image: 'https://hips.hearstapps.com/hmg-prod/images/2025-porsche-718-cayman-102-66f6f7f87752d.jpg?crop=0.481xw:0.361xh;0.240xw,0.404xh&resize=980:*', extras: []},
    { id: 8, marca: 'Toyota', price: 28500, km: 0, image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=500&q=60', extras: []},
    { id: 9, marca: 'Ford', price: 45000, km: 0, image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=500&q=60', extras: []},
    { id: 10, marca: 'Honda', price: 32000, km: 0, image: 'https://www.quadisibertecno.es/wp-content/uploads/sites/79/2020/02/Civic-2020-Sport-Line.jpg', extras: []}
  ];

  constructor() { }

  getCoches(){
    return this.listaCoches;
  }

  addCoche(marca: string, price: number, km: number, image: string, extras: string[]) {
    const newCoche = {
      id: this.listaCoches.length + 1, 
      marca: marca, 
      price: price, 
      km: km,
      image: image || 'https://via.placeholder.com/150',
      extras: extras || []
    }
      
    
      this.listaCoches.push(newCoche);
  }

  eliminarCoche(id: number) {
    const indice = this.listaCoches.findIndex(coche => coche.id === id);
    
    if(indice != -1) {
      this.listaCoches.splice(indice, 1);
    }
  }

  // Añadir dentro de la clase CocheService
  actualizarCoche(id: number, marca: string, price: number, km: number, image: string, extras: string[]) {
    // Buscamos la posición del coche en el array
    const indice = this.listaCoches.findIndex(coche => coche.id === id);
    
    if (indice !== -1) {
      // Si existe, actualizamos sus datos
      this.listaCoches[indice].marca = marca;
      this.listaCoches[indice].price = price;
      this.listaCoches[indice].km = km;
      this.listaCoches[indice].image = image;
      this.listaCoches[indice].extras = extras;
    }
  }
}
