import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboughtComponent } from 'src/app/modules/abought/components/abought/abought.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  declarations: [AboughtComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AboughtModule {}
