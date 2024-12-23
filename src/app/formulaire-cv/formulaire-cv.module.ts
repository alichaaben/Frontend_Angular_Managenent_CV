import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulaireCvRoutingModule } from './formulaire-cv-routing.module';
import { FormulaireCVComponent } from './formulaire-cv.component';
import { ListeCVComponent } from './liste-cv/liste-cv.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateExperienceComponent } from './liste-cv/update-experience/update-experience.component';


@NgModule({
  declarations: [
    FormulaireCVComponent,
    ListeCVComponent,
    UpdateExperienceComponent

  ],
  imports: [
    CommonModule,
    FormulaireCvRoutingModule,
    ReactiveFormsModule,
  ]
})
export class FormulaireCvModule { }
