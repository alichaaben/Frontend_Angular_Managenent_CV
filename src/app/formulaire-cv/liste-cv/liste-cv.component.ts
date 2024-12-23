import { Component } from '@angular/core';
import { ExperienceMdl } from 'src/app/model/experience.model';
import { ExperiencesService } from 'src/app/services/experiences.service';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrl: './liste-cv.component.scss'
})
export class ListeCVComponent {


  public recuperExperience: ExperienceMdl[] = [];



  constructor(private experienceService: ExperiencesService) {

  }



  ngOnInit(): void {
    this.experienceService.getAllExperience().subscribe({
      next: (data: ExperienceMdl[]) => {
        this.recuperExperience = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des Experiences :', err);
      },
    });
  }



  editExperience(ExperienceId: string): void {
    console.log('Modifier le Experience avec ID:', ExperienceId);
  }

  deleteExperience(experienceId: string): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce Experience ?')) {
      this.experienceService.deleteExperience(experienceId).subscribe({
        next: () => {
          this.recuperExperience = this.recuperExperience.filter(experience => experience.id !== experienceId);
        },
        error: (err) => {
          console.error(`Erreur lors de la suppression du experience avec l'ID ${experienceId}:`, err);
        },
      });
    }
  }

}
