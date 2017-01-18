import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { SideBarComponent} from './SideBar/SideBar.component';
import { ClientsComponent } from './Clients/Clients.component';
import { HomeComponent } from './Home/Home.component';
import { ProjectsComponent } from './Projects/Projects.component';

@NgModule({
  declarations: [
    AppComponent,SideBarComponent,ClientsComponent,HomeComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
