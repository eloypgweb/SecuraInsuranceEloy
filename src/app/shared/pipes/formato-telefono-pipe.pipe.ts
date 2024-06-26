import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'formatoTelefono',
  standalone: false,
})
export class FormatoTelefonoPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    // Eliminar cualquier carácter no numérico del número de teléfono
    const phoneNumber = value.replace(/\D/g, '');

    // Aplicar el formato deseado al número de teléfono
    const formattedPhoneNumber = phoneNumber.replace(
      /(\d{3})(\d{3})(\d{3})/,
      '+$1 $2 $3'
    );

    return formattedPhoneNumber;
  }
}
