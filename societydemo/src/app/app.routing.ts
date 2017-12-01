import { HomePage } from './../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
   { path: 'sales', component: HomePage },
   { path: 'sales1', component: ProfilePage }
];

export  const routing = RouterModule.forRoot(routes);
