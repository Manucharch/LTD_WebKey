import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  TranslateModule } from '@ngx-translate/core';


import { ProjectsComponent } from 'src/app/modules/projects/components/projects/projects.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  }
];

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes),
  ],
})
export class ProjectsModule {}
