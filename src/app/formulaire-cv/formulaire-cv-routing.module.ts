import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireCVComponent } from './formulaire-cv.component';
import { ListeCVComponent } from './liste-cv/liste-cv.component';
import { UpdateExperienceComponent } from './liste-cv/update-experience/update-experience.component';

const routes: Routes = [
  {
    path: 'cree',
    component: FormulaireCVComponent
  },
  {
    path: 'liste',
    component: ListeCVComponent
  },
  {
    path: 'update-experience/:id',
    component: UpdateExperienceComponent
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulaireCvRoutingModule { }
