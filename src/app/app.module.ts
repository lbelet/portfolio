import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // Importer RouterModule
import { routes } from './app.routes';  // Importer vos routes personnalisées

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes)  // Configurer les routes ici
  ],
  // aucun composant n'est bootstrapé ici car AppComponent est autonome
})
export class AppModule { }


