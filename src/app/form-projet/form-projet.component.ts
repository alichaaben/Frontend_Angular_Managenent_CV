import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjetsService } from 'src/app/services/projets.service';
import { ProjetsMdl } from 'src/app/model/projets.model';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-form-projet',
  templateUrl: './form-projet.component.html',
  styleUrls: ['./form-projet.component.scss']
})
export class FormProjetComponent {

  projetForm: FormGroup;

  constructor(private fb: FormBuilder,
    private projetService: ProjetsService,
    private authentificationService:AuthentificationService,
    private router: Router) {
    this.projetForm = this.fb.group({
      projectName: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      status: ['En cours', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.projetForm.invalid) {
      alert('Veuillez remplir tous les champs correctement.');
      return;
    }

    const newProjet: ProjetsMdl = {
      id: '',
      nomProjet: this.projetForm.value.projectName,
      description: this.projetForm.value.description,
      dateDebut: this.projetForm.value.startDate,
      dateFin: this.projetForm.value.endDate,
      statut: this.projetForm.value.status,
      userName: this.authentificationService.username,
    };


    this.projetService.addProjet(newProjet).subscribe({
      next: (response) => {
        this.projetForm.reset();
        this.router.navigateByUrl("Admin/GestionProjet/listeProjet");
      },
      error: (err) => {
        console.error('Erreur lors de l’ajout du projet :', err);
      },
    });
  }
}
