
import { Routes } from '@angular/router';

import { Materias } from './Views/materias/materias';

export const routes: Routes = [

  { path: '', redirectTo: 'materias', pathMatch: 'full' },

  { path: 'materias', component: Materias }

];
