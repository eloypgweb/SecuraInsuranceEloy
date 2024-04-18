import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Detalles1Service {
  detalles1: any = {};
  cargados = false;

  constructor(private http: HttpClient) {
    console.log('Detalles1Service initialized');
    this.loadData();
  }

  loadData() {
    this.http.get('../../assets/data/detalle1.json').subscribe((data) => {
      this.detalles1 = data;
      this.cargados = true;
      console.log('Data de detalle1');
      console.log(this.detalles1);
    });
  }
}
