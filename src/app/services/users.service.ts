import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { UserMdl } from '../model/User.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl: string = `${environment.BackEndHost}/user`;

  constructor(private http: HttpClient) { }

  public getAllUser(): Observable<UserMdl[]> {
    return this.http.get<UserMdl[]>(this.apiUrl);
  }

  public getUserById(id: string): Observable<UserMdl> {
    return this.http.get<UserMdl>(`${this.apiUrl}/${id}`);
  }

  public addUser(user: UserMdl, profileImage: File | null): Observable<UserMdl> {
    const formData = new FormData();
    formData.append('userName', user.userName);
    formData.append('email', user.email);
    formData.append('telephone', user.telephone);
    formData.append('motDePasse', user.motDePasse);
    formData.append('roleName', user.roleName);

    if (profileImage) {
      formData.append('profileImage', profileImage);
    }

    return this.http.post<UserMdl>(this.apiUrl, formData);
  }

  

  public updateUser(user: UserMdl, profileImage: File | null): Observable<UserMdl> {
    const formData = new FormData();
    formData.append('id', user.id);
    formData.append('userName', user.userName);
    formData.append('email', user.email);
    formData.append('telephone', user.telephone);
    formData.append('motDePasse', user.motDePasse);
    formData.append('roleName', user.roleName);

    if (profileImage) {
      formData.append('profileImage', profileImage);
    }

    return this.http.put<UserMdl>(this.apiUrl, formData);
  }

  public deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
