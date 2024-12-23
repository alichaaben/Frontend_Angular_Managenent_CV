import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormEmpRoutingModule } from './form-emp-routing.module';
import { FormEmpComponent } from './form-emp.component';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from './list-emp/update-user/update-user.component';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FormEmpComponent,
    ListEmpComponent,
    UpdateUserComponent
  ],
  imports: [
    CommonModule,
    FormEmpRoutingModule,
    ReactiveFormsModule,

    /****** ng Material *****/

    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    RouterModule,
    
    
  ]
})
export class FormEmpModule { }
