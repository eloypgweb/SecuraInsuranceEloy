import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Detalle2Service {
  detalles2: any = {};
  cargados = false;

  constructor(private http: HttpClient) {
    console.log('Detalles2Service initialized');
    this.loadData();
  }

  loadData() {
    this.http.get('../../assets/data/detalle2.json').subscribe((data) => {
      this.detalles2 = data;
      this.cargados = true;
      console.log('Data de detalle1');
      console.log(this.detalles2);
    });
  }
}
