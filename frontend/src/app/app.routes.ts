import { Routes } from '@angular/router';
import { WowClassesComponent } from './presentation/wow-classes/wow-classes';
import { ClassDetailComponent } from './presentation/wow-class-details/wow-class-details';
import { WowSpecialization } from './presentation/wow-specialization/wow-specialization';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'classes',
    pathMatch: 'full', 
  },
  {
    path: 'classes',
    component: WowClassesComponent
  },
  {
    path: 'classes/:id',
    component: ClassDetailComponent
  },

  {
    path: 'spe-details/:id', 
    component: WowSpecialization
  }
];
