import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {

  isAuthenticated: boolean = false;
  roles: any;
  username: any;
  accessToken!: any;

  constructor(private http: HttpClient, private router: Router) { }

  public login(userName: string, password: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const body = new HttpParams()
      .set('userName', userName)
      .set('password', password);

    return this.http.post(`${environment.BackEndHost}/auth/login`, body.toString(), { headers });
  }



  loadUser(data: any) {
    this.isAuthenticated = true;
    this.accessToken = data['access-token'];

    // Décoder le jeton JWT
    const jwtdecoder: any = jwtDecode(this.accessToken);
    this.username = jwtdecoder.sub;
    this.roles = jwtdecoder.scope;

    // Stocker le jwt-token dans le localStorage
    window.localStorage.setItem("jwt-token", this.accessToken);
  }



  logout() {
    this.isAuthenticated = false;
    this.accessToken = undefined;
    this.username = undefined;
    this.roles = undefined;
    window.localStorage.removeItem("jwt-token");
    this.router.navigateByUrl("/Login");
  }

  loadJwtTokenFromLocalStorage() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const token = window.localStorage.getItem("jwt-token");
      if (token) {
        this.loadUser({ "access-token": token });
        //this.router.navigateByUrl("/Admin/**");
      }
    }
  }


}
