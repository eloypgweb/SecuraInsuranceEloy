import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http'; // Importa provideHttpClient

// Pipes
import { FormatoTelefonoPipe } from './pipes/formato-telefono-pipe.pipe';
import { FormatoFechaPipe } from './pipes/formato-fecha.pipe';
import { FormatoDineroPipe } from './pipes/formato-dinero.pipe';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(), // Añade provideHttpClient a los providers
    FormatoTelefonoPipe,
    FormatoFechaPipe,
    FormatoDineroPipe,
    provideAnimationsAsync(),
  ],
};
