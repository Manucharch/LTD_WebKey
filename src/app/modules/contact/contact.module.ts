import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ContactComponent } from 'src/app/modules/contact/components/contact/contact.component';
import { ContactformComponent } from 'src/app/modules/contact/components/contactform/contactform.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactComponent, ContactformComponent],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
})
export class ContactModule {}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
