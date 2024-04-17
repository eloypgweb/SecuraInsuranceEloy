import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import { bootstrapTelephone } from '@ng-icons/bootstrap-icons';
import { bootstrapEnvelope } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [
    provideIcons({ featherAirplay, bootstrapTelephone, bootstrapEnvelope }),
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
