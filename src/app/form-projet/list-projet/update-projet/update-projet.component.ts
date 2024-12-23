import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetsService } from 'src/app/services/projets.service';
import { ProjetsMdl } from 'src/app/model/projets.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-projet',
  templateUrl: './update-projet.component.html',
  styleUrls: ['./update-projet.component.scss']
})
export class UpdateProjetComponent implements OnInit {
  projetForm: FormGroup;
  projetId!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projetService: ProjetsService,
    private fb: FormBuilder
  ) {
    this.projetForm = this.fb.group({
      projectName: [''],
      description: [''],
      startDate: [''],
      endDate: [''],
      status: ['']
    });
  }

  ngOnInit(): void {
    // Récupérer l'ID du projet à partir de l'URL
    this.projetId = this.route.snapshot.paramMap.get('id')!;
    this.loadProjet();
  }

  loadProjet(): void {
    this.projetService.getProjetById(this.projetId).subscribe({
      next: (projet: ProjetsMdl) => {
        this.projetForm.patchValue({
          projectName: projet.nomProjet,
          description: projet.description,
          startDate: projet.dateDebut,
          endDate: projet.dateFin,
          status: projet.statut
        });
      },
      error: (err) => {
        console.error('Erreur lors du chargement du projet:', err);
      }
    });
  }

  onSubmit(): void {
    if (this.projetForm.invalid) {
      alert('Veuillez remplir tous les champs correctement.');
      return;
    }

    const updatedProjet: ProjetsMdl = {
      id: this.projetId,
      nomProjet: this.projetForm.value.projectName,
      description: this.projetForm.value.description,
      dateDebut: this.projetForm.value.startDate,
      dateFin: this.projetForm.value.endDate,
      statut: this.projetForm.value.status,
      userName: 'AliCH'
    };

    this.projetService.updateProjet(updatedProjet).subscribe({
      next: () => {
        this.router.navigateByUrl("Admin/GestionProjet/listeProjet");
      },
      error: (err) => {
        console.error('Erreur lors de la mise à jour du projet:', err);
      }
    });
  }
}
