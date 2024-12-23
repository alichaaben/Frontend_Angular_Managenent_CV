import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from './services/authentification.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private authentificationService : AuthentificationService){}

  ngOnInit(){
    this.authentificationService.loadJwtTokenFromLocalStorage();
  }

  
  
}
