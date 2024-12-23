import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetsMdl } from 'src/app/model/projets.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperiencesService } from 'src/app/services/experiences.service';
import { ExperienceMdl } from 'src/app/model/experience.model';

@Component({
  selector: 'app-update-experience',
  templateUrl: './update-experience.component.html',
  styleUrls: ['./update-experience.component.scss']
})
export class UpdateExperienceComponent implements OnInit{

    cvForm: FormGroup;
    experienceId!: string;
  
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private experiencesService: ExperiencesService,
      private fb: FormBuilder
    ) {
      this.cvForm = this.fb.group({
        project: ['',Validators.required],
        poste: ['', Validators.required],
        activites: ['', Validators.required],
      });
    }
  
    ngOnInit(): void {
      this.experienceId = this.route.snapshot.paramMap.get('id')!;
      this.loadExperience();
    }
  
    loadExperience(): void {
      this.experiencesService.getExperienceById(this.experienceId).subscribe({
        next: (experience: ExperienceMdl) => {
          this.cvForm.patchValue({
          titreExperience: this.cvForm.value.project,
          poste: this.cvForm.value.poste,
          activites: this.cvForm.value.activites,
          });
        },
        error: (err) => {
          console.error('Erreur lors du chargement de l\'experiences:', err);
        }
      });
    }
  
    onSubmit(): void {
      if (this.cvForm.invalid) {
        alert('Veuillez remplir tous les champs correctement.');
        return;
      }
  
      const updatedExperience: ExperienceMdl = {
        id: this.experienceId,
        titreExperience: this.cvForm.value.project,
        poste: this.cvForm.value.poste,
        activites: this.cvForm.value.activites,
        userName: 'AliCH'
      };
  
      this.experiencesService.updateExperience(updatedExperience).subscribe({
        next: () => {
          this.router.navigateByUrl("Admin/CreeEX/liste");
        },
        error: (err) => {
          console.error('Erreur lors de la mise à jour de l\'experiences::', err);
        }
      });
    }

}
