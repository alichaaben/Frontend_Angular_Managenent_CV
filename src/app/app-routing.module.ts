import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AffecterProjetComponent } from './affecter-projet/affecter-projet.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth-gard.guard';
import { authorizGardGuardAdmin, authorizGardGuardManager, authorizGardGuardEmp } from './guards/authoriz-gard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Login',
    pathMatch: 'full',
  },
  {
    path: 'Login',
    component: LoginComponent,
  },
  {
    path: 'Admin',
    component: AdminTemplateComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'CreeEX',
        loadChildren: () => import('./formulaire-cv/formulaire-cv.module').then(m => m.FormulaireCvModule),
        canActivate: [authorizGardGuardEmp],
        data: { role: ['ROLE_Admin', 'ROLE_Employe'] },
      },
      {
        path: 'GestionEmp',
        loadChildren: () => import('./form-emp/form-emp.module').then(m => m.FormEmpModule),
        canActivate: [authorizGardGuardAdmin],
        data: { role: 'ROLE_Admin' },
      },
      {
        path: 'GestionProjet',
        loadChildren: () => import('./form-projet/form-projet.module').then(m => m.FormProjetModule),
        canActivate: [authorizGardGuardManager],
        data: { role: ['ROLE_Admin', 'ROLE_Manager'] },
      },
      {
        path: 'AffecterEmp',
        component: AffecterProjetComponent,
        canActivate: [authorizGardGuardManager],
        data: { role: ['ROLE_Admin', 'ROLE_Manager'] },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
