import { Route } from '@angular/router';
 
import { ClientsComponent } from './Clients/Clients.component';
import { HomeComponent } from './Home/Home.component';
import { ProjectsComponent } from './Projects/Projects.component';
 
export const routes: Route[] = [
    {path:'',component:HomeComponent},
  { path: 'clients', component: ClientsComponent },
  { path: 'projects', component: ProjectsComponent }
];