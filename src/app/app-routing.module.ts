import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'secure',
    loadChildren: () => import('./secure/secure.module').then((m) => m.SecurePageModule),
    canActivate: [AuthGuard], // Aplica el guardia a esta ruta
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'secure',
    loadChildren: () => import('./secure/secure.module').then( m => m.SecurePageModule)
  },
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
 })
 export class AppRoutingModule {}





