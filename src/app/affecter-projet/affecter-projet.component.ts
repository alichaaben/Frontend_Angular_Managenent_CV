import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AffectionsService } from '../services/affections.service';
import { ProjetsService } from '../services/projets.service';
import { AffecterMdl } from '../model/Affecter.model';
import { ProjetsMdl } from '../model/projets.model';
import { UserMdl } from '../model/User.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-affecter-projet',
  templateUrl: './affecter-projet.component.html',
  styleUrls: ['./affecter-projet.component.scss']
})
export class AffecterProjetComponent implements OnInit {

  affectationForm: FormGroup;
  projets: ProjetsMdl[] = []; // liste des projets
  users: UserMdl[] = []; // liste des users

  constructor(
    private fb: FormBuilder,
    private affectionsService: AffectionsService,
    private projetsService: ProjetsService,
    private usersService: UsersService,
    private router: Router
  ) {
    this.affectationForm = this.fb.group({
      projetId: ['', Validators.required],
      employeId: ['', Validators.required],
      poste: ['', Validators.required],
      activites: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadProjets();
    this.loadUsers();
  }


  loadProjets(): void {
    this.projetsService.getAllProjets().subscribe({
      next: (data: ProjetsMdl[]) => {
        this.projets = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des projets :', err);
      }
    });
  }

  loadUsers(): void {
    this.usersService.getAllUser().subscribe({
      next: (data: UserMdl[]) => {
        this.users = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des users :', err);
      }
    });
  }


  onSubmit(): void {
    if (this.affectationForm.invalid) {
      alert('Veuillez remplir tous les champs correctement.');
      return;
    }

    const newAffectation: AffecterMdl = {
      id: '',
      projet: this.affectationForm.value.projetId,
      employe: this.affectationForm.value.employeId,
      poste: this.affectationForm.value.poste,
      activites: this.affectationForm.value.activites,
    };

    this.affectionsService.addAffectation(newAffectation).subscribe({
      next: (response) => {
        this.affectationForm.reset();
        alert('Projet affecté avec succès.');
      },
      error: (err) => {
        console.error('Erreur lors de l\'affectation :', err);
      },
    });
  }
}
