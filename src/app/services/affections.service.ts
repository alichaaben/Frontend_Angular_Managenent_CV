import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { AffecterMdl } from '../model/Affecter.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AffectionsService {


    private apiUrl: string = `${environment.BackEndHost}/affictation`;
    
      constructor(private http: HttpClient) {}
    
      public addAffectation(Affect: AffecterMdl): Observable<AffecterMdl> {
        return this.http.post<AffecterMdl>(`${this.apiUrl}`, Affect);
      }
    

}
