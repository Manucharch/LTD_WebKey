import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  TranslateModule } from '@ngx-translate/core';

import { ContactComponent } from 'src/app/modules/contact/components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent
  }
];


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
})
export class ContactModule {}