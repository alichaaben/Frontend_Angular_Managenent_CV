import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperiencesService } from '../services/experiences.service';
import { Router } from '@angular/router';
import { ExperienceMdl } from '../model/experience.model';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-formulaire-cv',
  templateUrl: './formulaire-cv.component.html',
  styleUrl: './formulaire-cv.component.scss'
})
export class FormulaireCVComponent {

  cvForm: FormGroup;

  constructor(private fb: FormBuilder,
    private experiencesService: ExperiencesService,
    private authentificationService : AuthentificationService,
    private router: Router) {
    this.cvForm = this.fb.group({
      // fullName: ['', [Validators.required, Validators.minLength(3)]],
      // email: ['', [Validators.required, Validators.email,
      //   Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],

      // phone: ['', [Validators.required, Validators.pattern(/^[0-9]{8,12}$/)]],
      project: ['',Validators.required],
      poste: ['', Validators.required],
      activites: ['', Validators.required],
    });
  }

  onSubmit(): void {
      if (this.cvForm.invalid) {
        alert('Veuillez remplir tous les champs correctement.');
        return;
      }
  
      const newExperience: ExperienceMdl = {
        id: '',
        titreExperience: this.cvForm.value.project,
        poste: this.cvForm.value.poste,
        activites: this.cvForm.value.activites,
        userName: this.authentificationService.username,
      };


      this.experiencesService.addExperience(newExperience).subscribe({
        next: (response) => {
          this.cvForm.reset();
          this.router.navigateByUrl("Admin/CreeEX/liste");
        },
        error: (err) => {
          console.error('Erreur lors de l’ajout de l\'experience :', err);
        },
      });
    }



}