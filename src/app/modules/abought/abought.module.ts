import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  TranslateModule } from '@ngx-translate/core';

import { AboughtComponent } from 'src/app/modules/abought/components/abought/abought.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AboughtComponent
  }
];

@NgModule({
  declarations: [AboughtComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes),
  ],
})
export class AboughtModule {}
