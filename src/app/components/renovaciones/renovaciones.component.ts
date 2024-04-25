import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import {
  bootstrapFileEarmark,
  bootstrapSliders,
} from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-renovaciones',
  standalone: true,
  imports: [RouterLink, NgIconComponent],
  viewProviders: [
    provideIcons({
      featherAirplay,
      bootstrapFileEarmark,
      bootstrapSliders,
    }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './renovaciones.component.html',
  styleUrl: './renovaciones.component.scss',
})
export class RenovacionesComponent {}
