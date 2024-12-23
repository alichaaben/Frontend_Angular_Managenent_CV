import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ProjetsMdl } from '../model/projets.model';

@Injectable({
  providedIn: 'root'
})
export class ProjetsService {
  private apiUrl: string = `${environment.BackEndHost}/projets`;

  constructor(private http: HttpClient) {}

  // Récupérer tous les projets
  public getAllProjets(): Observable<ProjetsMdl[]> {
    return this.http.get<ProjetsMdl[]>(this.apiUrl);
  }

  // Récupérer un projet par ID
  public getProjetById(id: string): Observable<ProjetsMdl> {
    return this.http.get<ProjetsMdl>(`${this.apiUrl}/${id}`);
  }

  // Ajouter un projet
  public addProjet(projet: ProjetsMdl): Observable<ProjetsMdl> {
    return this.http.post<ProjetsMdl>(`${this.apiUrl}`, projet);
  }


  // Modifier un projet
  public updateProjet(projet: ProjetsMdl): Observable<ProjetsMdl> {
    return this.http.put<ProjetsMdl>(`${this.apiUrl}`, projet);
  }

  // Supprimer un projet par ID
public deleteProjet(id: string): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${id}`);
}

}
