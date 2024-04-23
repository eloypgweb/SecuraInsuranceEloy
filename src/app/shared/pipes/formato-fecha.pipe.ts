import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoFecha',
  standalone: false,
})
export class FormatoFechaPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const datePipe = new DatePipe('es');
    return datePipe.transform(value, 'dd/MM/yyyy');
  }
}
