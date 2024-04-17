import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// Si vous n'avez pas besoin de passer en mode production ici, retirez ce bloc
// if (environment.production) {
//   enableProdMode();
// }

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
