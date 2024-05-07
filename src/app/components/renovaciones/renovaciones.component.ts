// De Angular
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginatorIntl } from '@angular/material/paginator';

// Iconos
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import {
  bootstrapFileEarmark,
  bootstrapSliders,
  bootstrapClock,
  bootstrapCheck2,
  bootstrapXLg,
  bootstrapChevronDown,
  bootstrapEye,
} from '@ng-icons/bootstrap-icons';

// Services
import { ListRenovationsService } from '../../services/list-renovations.service';

// Mis pipes
import { MispipesModule } from '../../shared/pipes/mispipes.module';
import { NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-renovaciones',
  standalone: true,
  imports: [
    RouterLink,
    MispipesModule,
    NgIconComponent,
    MatTableModule,
    MatPaginatorModule,
    NgClass,
    NgIf,
    FormsModule,
  ],
  viewProviders: [
    provideIcons({
      featherAirplay,
      bootstrapFileEarmark,
      bootstrapSliders,
      bootstrapClock,
      bootstrapCheck2,
      bootstrapXLg,
      bootstrapChevronDown,
      bootstrapEye,
    }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './renovaciones.component.html',
  styleUrl: './renovaciones.component.scss',
})
export class RenovacionesComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'nPolicy',
    'riskName',
    'contractDate',
    'expirationDate',
    'amount',
    'state',
  ];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private listRenovationsService: ListRenovationsService,
    private paginatorIntl: MatPaginatorIntl
  ) {
    this.paginatorIntl.itemsPerPageLabel = 'Filas por página:';
    this.paginatorIntl.getRangeLabel = this.getRangeLabel.bind(this);
  }

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0 || pageSize === 0) {
      return `Página 1 de 1`;
    }

    length = Math.max(length, 0);

    const startIndex = page * pageSize;
    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex + pageSize;

    return `Página ${page + 1} de ${Math.ceil(length / pageSize)}`;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.listRenovationsService.loadData();
    this.listRenovationsService.listRenovations.subscribe((data: any) => {
      this.dataSource.data = data;
    });
  }

  orderType: 'asc' | 'desc' = 'asc';

  applySorting() {
    const data = this.dataSource.data.slice(); // Hacemos una copia de los datos
    if (this.orderType === 'asc') {
      // Ordenamos los datos de menor a mayor
      data.sort((a, b) => a.amount - b.amount);
    } else {
      // Ordenamos los datos de mayor a menor
      data.sort((a, b) => b.amount - a.amount);
    }
    // Actualizamos los datos en la tabla
    this.dataSource.data = data;
  }

  applyFilters() {
    // Add your code here to apply the filters
  }
}
