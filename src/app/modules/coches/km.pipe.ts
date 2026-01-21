import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'km'
})
export class KmPipe implements PipeTransform {

  transform(value: number): string {
    if(!value && value !== 0) {
      return '';
    }
    return value.toLocaleString('es-ES').replace(/\./g, ' ') + ' km';
  }

}
