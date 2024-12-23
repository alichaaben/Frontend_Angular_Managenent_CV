import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { AdminTemplateComponent } from './admin-template.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SidenavComponent,
    HeaderComponent,
    SublevelMenuComponent,
    BodyComponent,
    AdminTemplateComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    CdkMenuModule,
    RouterModule
  ]
})
export class AdminTemplateModule { }
