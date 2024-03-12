import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from 'src/app/modules/home/components/home/home.component';

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   {
//     path: 'home',
//     component: HomeComponent,
//     children: [
//       { path: 'abought', component: AboughtComponent },
//       { path: 'projects', component: ProjectsComponent },
//     ],
//   },
// ];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule],
})
export class HomeModule {}
