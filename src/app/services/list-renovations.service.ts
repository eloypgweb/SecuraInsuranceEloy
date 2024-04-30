import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListRenovationsService {
  listRenovations: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) {
    console.log('ListRenovationsService initialized');
    this.loadData();
  }

  loadData() {
    this.http
      .get<any[]>('../../assets/data/listado_renovaciones.json')
      .subscribe((data) => {
        this.listRenovations.next(data);
        console.log('Listado de las renovaciones:');
        console.log(data);
      });
  }
}
