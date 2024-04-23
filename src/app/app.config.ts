import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http'; // Importa provideHttpClient

// Mis Pipes
// import { MispipesModule } from './shared/pipes/mispipes.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(), // Añade provideHttpClient a los providers
    // MispipesModule, // Añade MispipesModule a los providers
    provideAnimationsAsync(),
  ],
};
