import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { EntertainComponent } from 'src/app/modules/entertain/components/entertain/entertain.component';

import { UnittableComponent } from 'src/app/modules/entertain/components/unittable/unittable.component';
import { ConvertationsComponent } from './components/convertations/convertations.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EntertainComponent,
    UnittableComponent,
    ConvertationsComponent,
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
    FormsModule,
  ],
})
export class EntertainModule {}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
