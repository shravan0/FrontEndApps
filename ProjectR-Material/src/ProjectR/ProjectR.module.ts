import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './ProjectR.routes';
import { ProjectRComponent } from './ProjectR.component';
import { SideBarComponent} from './SideBar/SideBar.component';
import { ClientsComponent } from './Clients/Clients.component';
import { HomeComponent } from './Home/Home.component';
import { ProjectsComponent } from './Projects/Projects.component';
import {MaterialModule} from '@angular/material';
import { NavBarComponent } from './NavBar/NavBar.component';
import { HeaderComponent } from './Header/Header.component';
import { SkillsComponent } from './Skills/Skills.component';

@NgModule({
  declarations: [
    ProjectRComponent,SideBarComponent,ClientsComponent,HomeComponent,
    ProjectsComponent,
    NavBarComponent,
    HeaderComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     RouterModule.forRoot(routes),
      MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [ProjectRComponent]
})
export class ProjectR { }
