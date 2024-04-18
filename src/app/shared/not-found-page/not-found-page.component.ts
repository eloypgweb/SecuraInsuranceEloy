import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import { bootstrapBan } from '@ng-icons/bootstrap-icons';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [RouterLink, MatCardModule, NgIconComponent, MatButtonModule],
  viewProviders: [provideIcons({ featherAirplay, bootstrapBan })],
  templateUrl: './not-found-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './not-found-page.component.scss',
})
export class NotFoundPageComponent {}
