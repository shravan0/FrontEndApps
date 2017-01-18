import { Route } from '@angular/router';
 
import { ClientsComponent } from './Clients/Clients.component';
import { HomeComponent } from './Home/Home.component';
import { ProjectsComponent } from './Projects/Projects.component';
import { SideBarComponent} from './SideBar/SideBar.component';
import { SkillsComponent} from './Skills/Skills.component';
export const routes: Route[] = [
    {path:'',component:HomeComponent},
  { path: 'clients', component: ClientsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent }
];