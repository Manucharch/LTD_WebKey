import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MainComponent } from 'src/app/modules/main/components/main/main.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HomeComponent } from 'src/app/modules/home/components/home/home.component';
import { AboughtComponent } from 'src/app/modules/abought/components/abought/abought.component';
import { ProjectsComponent } from 'src/app/modules/projects/components/projects/projects.component';
import { ContactComponent } from 'src/app/modules/contact/components/contact/contact.component';
import { EntertainComponent } from 'src/app/modules/entertain/entertain.component';
import { HomeModule } from 'src/app/modules/home/home.module';
import { TitleComponent } from 'src/app/components/title/title.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboughtComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'contact', component: ContactComponent },
    ],
  },
  { path: 'entertain', component: EntertainComponent },
];

@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    FooterComponent,
    TitleComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
    RouterModule.forChild(routes),
    HomeModule,
  ],
})
export class MainModule {}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
