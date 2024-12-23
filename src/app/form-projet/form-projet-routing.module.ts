import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProjetComponent } from './form-projet.component';
import { ListProjetComponent } from './list-projet/list-projet.component';
import { UpdateProjetComponent } from './list-projet/update-projet/update-projet.component';

const routes: Routes = [
  {
    path: 'creeProjet',
    component: FormProjetComponent
  },
  {
    path: 'listeProjet',
    component: ListProjetComponent
  },
  { 
    path: 'update-projet/:id',
    component: UpdateProjetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormProjetRoutingModule { }
