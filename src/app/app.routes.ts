import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'; // Assurez-vous que le chemin est correct
import { ProjetsComponent } from './pages/projets/projets.component'; // Assurez-vous que le chemin est correct

export const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' }, // Définit AppComponent comme page d'accueil
  { path: 'projets', component: ProjetsComponent } // Route pour la page Projets
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


