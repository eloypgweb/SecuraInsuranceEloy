import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoFecha',
  standalone: false,
})
export class FormatoFechaPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const dateValue = new Date(value); // Convert value to a Date object
    const day = dateValue.getDate().toString().padStart(2, '0');
    const month = (dateValue.getMonth() + 1).toString().padStart(2, '0');
    const year = dateValue.getFullYear().toString();
    return `${day}/${month}/${year}`;
  }
}
