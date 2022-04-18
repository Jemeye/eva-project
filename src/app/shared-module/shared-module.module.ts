import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { RouterModule } from '@angular/router'
import {MatDialogModule } from '@angular/material/dialog' ;'@material/button';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentWrapperComponent,
    ControlSidebarComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatDialogModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentWrapperComponent,
    ControlSidebarComponent,
    MatDialogModule
  ]
})
export class SharedModuleModule { }