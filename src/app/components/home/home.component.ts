import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Detalles1Service } from '../../services/detalles1.service';

import { NgClass, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { ClientesPotencialesService } from '../../services/clientes-potenciales.service';
import { MatIconModule } from '@angular/material/icon';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import { bootstrapTrash } from '@ng-icons/bootstrap-icons';

import { FormatoTelefonoPipe } from '../../pipes/formato-telefono-pipe.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgIconComponent,
    NgFor,
    NgClass,
    RouterLink,
    MatTableModule,
    MatIconModule,
    FormatoTelefonoPipe,
  ],
  viewProviders: [provideIcons({ featherAirplay, bootstrapTrash })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  detalles1: any = {};
  clipot: any[] = [];

  constructor(
    public detallesService: Detalles1Service,
    public clientesPotService: ClientesPotencialesService
  ) {}

  ngOnInit() {
    console.log('Home initialized');
    this.detalles1 = this.detallesService.detalles1;
    // this.clipot = this.clientesPotService.clipot;
    // this.clipot = this.clientesPotService.clipot.slice(0, 2);
    this.actualizarClientes();
  }

  private actualizarClientes() {
    this.clipot = this.clientesPotService.clipot.slice(0, 2);
  }

  eliminarCliente(index: number) {
    // Eliminar el cliente del arreglo de clientes potenciales
    this.clientesPotService.clipot.splice(index, 1);
    // Actualizar la lista de clientes que se muestran en la vista HTML
    this.actualizarClientes();
  }
}
