import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ExperienceMdl } from '../model/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  private apiUrl: string = `${environment.BackEndHost}/experience`;
  
    constructor(private http: HttpClient) {}
  
    public getAllExperience(): Observable<ExperienceMdl[]> {
      return this.http.get<ExperienceMdl[]>(this.apiUrl);
    }
  
    public getExperienceById(id: string): Observable<ExperienceMdl> {
      return this.http.get<ExperienceMdl>(`${this.apiUrl}/${id}`);
    }
  

    public addExperience(experience: ExperienceMdl): Observable<ExperienceMdl> {
      return this.http.post<ExperienceMdl>(`${this.apiUrl}`, experience);
    }
  
  

    public updateExperience(experience: ExperienceMdl): Observable<ExperienceMdl> {
      return this.http.put<ExperienceMdl>(`${this.apiUrl}`, experience);
    }
  

  public deleteExperience(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
