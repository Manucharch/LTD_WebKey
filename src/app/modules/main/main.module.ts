import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from 'src/app/modules/main/components/main/main.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HomeComponent } from 'src/app/modules/home/components/home/home.component';
import { AboughtComponent } from 'src/app/modules/abought/components/abought/abought.component';
import { ProjectsComponent } from 'src/app/modules/projects/components/projects/projects.component';
import { ContactComponent } from 'src/app/modules/contact/components/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'abought', component: AboughtComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'contact', component: ContactComponent },
    ],
  },
];

@NgModule({
  declarations: [MainComponent, NavbarComponent, FooterComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MainModule {}
