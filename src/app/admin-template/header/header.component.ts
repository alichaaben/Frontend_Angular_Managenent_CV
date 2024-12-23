import { Component, Input } from '@angular/core';
import { HostListener } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
constructor(private authService:AuthentificationService){}

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  canShowSearchAsOverlay= false;


  @HostListener('window:resize', ['$event'])
onResize(event: any) {
this.checkCanShowSearchAsOverlay (window.innerWidth);
}

  ngOnInit(): void {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
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



