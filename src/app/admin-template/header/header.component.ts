import { Component, Input } from '@angular/core';
import { HostListener } from '@angular/core';
import { UserMdl } from 'src/app/model/User.model';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { UsersService } from 'src/app/services/users.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public recuperUser: UserMdl | null = null;
public imageBaseUrl = `${environment.UrlImages}`;



constructor(private authService:AuthentificationService,private usersService:UsersService){}

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  canShowSearchAsOverlay= false;


  @HostListener('window:resize', ['$event'])
onResize(event: any) {
this.checkCanShowSearchAsOverlay (window.innerWidth);
}

ngOnInit(): void {
  this.checkCanShowSearchAsOverlay(window.innerWidth);

  this.usersService.getAllByUserName(this.authService.username).subscribe({
    next: (data: UserMdl) => {
      this.recuperUser = data;
    },
    error: (err) => {
      console.error('Erreur lors du chargement des utilisateurs :', err);
    },
  });
}

  getHeadClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }

  checkCanShowSearchAsOverlay (innerWidth: number): void {
    if(innerWidth < 845) {
    this.canShowSearchAsOverlay = true;
    } else {
    this.canShowSearchAsOverlay = false;
    }
    }


    handelLogout(){
      this.authService.logout();
    }

}



