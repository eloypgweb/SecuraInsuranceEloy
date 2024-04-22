import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoDinero',
  standalone: true,
})
export class FormatoDineroPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value === null || isNaN(value)) {
      return '';
    }
    // Formatea el valor como un número con dos decimales
    const formattedValue = parseFloat(value).toFixed(2);
    // Separa los miles con puntos
    const parts = formattedValue.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return parts.join(',') + ' €';
  }
}
