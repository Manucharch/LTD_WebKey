import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


import { MainComponent } from 'src/app/modules/main/components/main/main.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HomeComponent } from 'src/app/modules/home/components/home/home.component';
import { HomeModule } from 'src/app/modules/home/home.module';
import { TitleComponent } from 'src/app/components/title/title.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', loadChildren: () => import('src/app/modules/abought/abought.module').then(m => m.AboughtModule) },
      { path: 'projects', loadChildren: () => import('src/app/modules/projects/projects.module').then(m => m.ProjectsModule) },
      { path: 'contact', loadChildren: () => import('src/app/modules/contact/contact.module').then(m => m.ContactModule) },
    ],
  },
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
    ReactiveFormsModule,
    HomeModule,
    BrowserAnimationsModule
  ],
})
export class MainModule {}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
