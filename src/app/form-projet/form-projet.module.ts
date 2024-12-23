import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormProjetRoutingModule } from './form-projet-routing.module';
import { FormProjetComponent } from './form-projet.component';
import { ListProjetComponent } from './list-projet/list-projet.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateProjetComponent } from './list-projet/update-projet/update-projet.component';


@NgModule({
  declarations: [
    FormProjetComponent,
    ListProjetComponent,
    UpdateProjetComponent
  ],
  imports: [
    CommonModule,
    FormProjetRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormProjetModule { }
