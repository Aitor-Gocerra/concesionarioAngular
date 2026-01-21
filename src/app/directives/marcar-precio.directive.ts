import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMarcarPrecio]'
})
export class MarcarPrecioDirective implements OnInit{

  @Input('appMarcarPrecio') precio!: number;

  constructor(private elemento: ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {
    if (this.precio > 50000) {
      this.renderer.addClass(this.elemento.nativeElement, 'precio-caro');
    }
  }
}
