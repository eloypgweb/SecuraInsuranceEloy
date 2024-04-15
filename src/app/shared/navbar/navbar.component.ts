import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgIconComponent } from '@ng-icons/core';

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
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  disableSelect = new FormControl(false);
  idioma: Idioma[] = [
    { value: 'ES', viewValue: 'Español' },
    { value: 'EN', viewValue: 'English' },
    { value: 'CA', viewValue: 'Catalán' },
  ];

  selectedIdioma = this.idioma[0].value;

  perfil: Perfil[] = [
    { value: 'misperfil', viewValue: 'Mi perfil' },
    { value: 'misdatos', viewValue: 'Mis datos personales' },
    { value: 'micontra', viewValue: 'Mi contraseña' },
    { value: 'contacto', viewValue: 'Contacto' },
    { value: 'cerrarses', viewValue: 'Cerrar sesión' },
  ];
  selectedPerfil = this.perfil[0].value;

  token: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('ToolbarComponent initialized');
    this.token = sessionStorage.getItem('token');
  }

  navegarParaHome(): void {
    this.router.navigate(['/']);
  }

  navegarParaRenovaciones(): void {
    this.router.navigate(['renovaciones']);
  }

  // login(): void {
  //   this.router.navigate(['login']);
  // }

  // logout(): void {
  //   sessionStorage.removeItem('token');
  //   this.router.navigate(['home']);
  // }
}
