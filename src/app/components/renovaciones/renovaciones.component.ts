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
import { NgClass, NgFor, NgIf } from '@angular/common';
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
    NgFor,
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

  uniquePolicyNumbers: string[] = []; // Inicializa uniquePolicyNumbers como un arreglo vacío

  // Declaraciones para filtros
  selectedPolicyNumber: string | undefined; // Propiedad para almacenar el número de póliza seleccionado
  riskName: string = ''; // Inicializa riskName como una cadena vacía
  startDate: Date | undefined;
  endDate: Date | undefined;
  amount: number | undefined;
  state: string | undefined;

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

    // Obtener los datos de la tabla
    const tableData = this.dataSource.data;

    // Obtener todos los números de póliza únicos
    const policyNumbersSet = new Set<string>();
    tableData.forEach((row) => {
      policyNumbersSet.add(row.nPolicy);
    });
    this.uniquePolicyNumbers = Array.from(policyNumbersSet);
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

  isFilterMenuOpen: boolean = false;

  toggleFilterMenu() {
    this.isFilterMenuOpen = !this.isFilterMenuOpen;
  }

  closeFilterMenu() {
    this.isFilterMenuOpen = false;
  }

  // Para almacenar los filtros aplicados
  appliedFilters: { label: string; value: any }[] = [];

  applyFilters() {
    let filteredData = this.listRenovationsService.listRenovations.value; // Accede a los datos cargados por el servicio
    // Obtenemos el valor seleccionado del número de póliza
    const selectedNumber = this.selectedPolicyNumber;

    // Filtrar los datos según el número de póliza seleccionado
    if (this.selectedPolicyNumber) {
      this.dataSource.filter = this.selectedPolicyNumber.trim().toLowerCase();
    }
    if (this.riskName) {
      filteredData = filteredData.filter((item: any) =>
        item.riskName.toLowerCase().includes(this.riskName.toLowerCase())
      );
    }
    if (this.startDate && this.endDate) {
      // Verifica que tanto startDate como endDate tengan valores asignados
      filteredData = filteredData.filter(
        (item: any) =>
          item.contractDate >= this.startDate! &&
          item.contractDate <= this.endDate!
      );
    }

    if (this.amount) {
      filteredData = filteredData.filter(
        (item: any) => item.amount === this.amount
      );
    }
    if (this.state) {
      filteredData = filteredData.filter(
        (item: any) => item.state === this.state
      );
    }

    this.dataSource.data = filteredData;
    // Llamada a la función para generar chips
    this.generateFilterChips();
    this.closeFilterMenu();
  }

  // Método para generar chips de filtro
  generateFilterChips() {
    this.appliedFilters = [];

    if (this.selectedPolicyNumber) {
      this.appliedFilters.push({
        label: 'Nº de Póliza',
        value: this.selectedPolicyNumber,
      });
    }

    if (this.riskName) {
      this.appliedFilters.push({
        label: 'Nombre del riesgo',
        value: this.riskName,
      });
    }

    if (this.startDate && this.endDate) {
      this.appliedFilters.push({
        label: 'Fecha de validez',
        value: `${this.startDate} - ${this.endDate}`,
      });
    }

    if (this.amount) {
      this.appliedFilters.push({ label: 'Importe', value: this.amount });
    }

    if (this.state) {
      this.appliedFilters.push({ label: 'Estado', value: this.state });
    }
  }

  // Método para eliminar un chip de filtro y actualizar la tabla
  removeFilterChip(filter: any) {
    // console.log('removeFilterChip' + filter);
    // Encuentra el índice del filtro en el array appliedFilters
    const index = this.appliedFilters.indexOf(filter);

    // Si se encuentra el filtro, elimínalo del array
    if (index >= 0) {
      this.appliedFilters.splice(index, 1);

      // Aplica los filtros nuevamente para actualizar la tabla
      this.applyFilters();
    }
  }
}
