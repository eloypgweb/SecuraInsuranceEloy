import { Component } from '@angular/core';
import { Detalles1Service } from '../../services/detalles1.service';
import { NgClass, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgClass, RouterLink, MatTableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  detalles1: any = {};

  constructor(public detallesService: Detalles1Service) {}

  ngOnInit() {
    console.log('Home initialized');
    this.detalles1 = this.detallesService.detalles1;
  }
}
