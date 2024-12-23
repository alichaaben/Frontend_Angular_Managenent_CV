import { Component, OnInit } from '@angular/core';
import { ProjetsMdl } from 'src/app/model/projets.model';
import { ProjetsService } from 'src/app/services/projets.service';

@Component({
  selector: 'app-list-projet',
  templateUrl: './list-projet.component.html',
  styleUrls: ['./list-projet.component.scss']
})
export class ListProjetComponent implements OnInit {

  public recuperProjets: ProjetsMdl[] = []; // Initialisation pour eviter les erreurs ou "!" si ne pas inistialiser

 

  constructor(private projetService: ProjetsService) {

  }



  ngOnInit(): void {
    this.projetService.getAllProjets().subscribe({
      next: (data: ProjetsMdl[]) => {
        this.recuperProjets = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des projets:', err);
      },
    });
  }


  
  editProjet(projetId: string): void {
    console.log('Modifier le projet avec ID:', projetId);
  }

  deleteProjet(projetId: string): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')) {
      this.projetService.deleteProjet(projetId).subscribe({
        next: () => {
          // Met a jour la liste des projets apres suppression
          this.recuperProjets = this.recuperProjets.filter(projet => projet.id !== projetId);
        },
        error: (err) => {
          console.error(`Erreur lors de la suppression du projet avec l'ID ${projetId}:`, err);
        },
      });
    }
  }
  
}
