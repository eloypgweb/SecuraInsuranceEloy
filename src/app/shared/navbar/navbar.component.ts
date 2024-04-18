import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenu, MatMenuModule } from '@angular/material/menu';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import { bootstrapCaretDownFill } from '@ng-icons/bootstrap-icons';

interface Idioma {
  value: string;
  viewValue: string;
}
interface Perfil {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    NgIconComponent,
    MatMenuModule,
  ],
  viewProviders: [provideIcons({ featherAirplay, bootstrapCaretDownFill })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  disableSelect = new FormControl(false);

  // token: string | null = null;

  constructor() {}

  ngOnInit(): void {
    console.log('NavBarComponent initialized');
    // this.token = sessionStorage.getItem('token');
  }

  // navegarParaHome(): void {
  //   this.router.navigate(['/']);
  // }

  // navegarParaRenovaciones(): void {
  //   this.router.navigate(['renovaciones']);
  // }
}
