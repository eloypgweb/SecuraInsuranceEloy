import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, RouterLink } from '@angular/router';

// Services
import { Detalle2Service } from '../../services/detalle2.service';

// Iconos
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import {
  bootstrapCheck2,
  bootstrapPencilSquare,
  bootstrapClock,
} from '@ng-icons/bootstrap-icons';

// Mis pipes
import { MispipesModule } from '../../shared/pipes/mispipes.module';
import { CommonModule, NgIf } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-detalle-poliza',
  standalone: true,
  imports: [
    MatCardModule,
    NgIconComponent,
    MispipesModule,
    NgIf,
    MatTableModule,
    CommonModule,
    RouterLink,
  ],
  viewProviders: [
    provideIcons({
      featherAirplay,
      bootstrapCheck2,
      bootstrapPencilSquare,
      bootstrapClock,
    }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './detalle-poliza.component.html',
  styleUrl: './detalle-poliza.component.scss',
})
export class DetallePolizaComponent implements OnInit {
  nPolicy: any | undefined;
  detalles2: any | undefined;

  constructor(
    private route: ActivatedRoute,
    private detalle2Service: Detalle2Service
  ) {}

  ngOnInit() {
    console.log('DetallePolizaComponent');

    // Vamos a leer los parametros de la URL
    this.route.params.subscribe((params: any) => {
      console.log(params.nPolicy);
      this.nPolicy = params.nPolicy;
    });

    // Get the data from Detalle2Service
    this.detalles2 = this.detalle2Service.detalles2;
  }
}
