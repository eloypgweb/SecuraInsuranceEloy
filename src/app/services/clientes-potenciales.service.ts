import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClientesPotencialesService {
  clipot: any = {};
  cargados = false;

  constructor(private http: HttpClient) {
    console.log('ClientesPotencialesService initialized');
    this.http
      .get('../../assets/data/clientes_potenciales.json')
      .subscribe((data) => {
        this.clipot = data;
        this.cargados = true;
        console.log('Data de clientes POTENCIALES');
        console.log(this.clipot);
      });
  }
}
