import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEmpComponent } from './form-emp.component';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { UpdateUserComponent } from './list-emp/update-user/update-user.component';

const routes: Routes = [
  {
    path: 'creeEmp',
    component: FormEmpComponent
  },
  {
    path: 'listeEmp',
    component: ListEmpComponent
  },
  {
    path:'update-user/:id',
    component: UpdateUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormEmpRoutingModule { }
