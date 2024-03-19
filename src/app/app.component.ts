import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    // translate.addLangs(['en', 'ge']);
    // translate.setDefaultLang('ge');
    translate.use(localStorage.getItem('language') || 'ge');
  }
  title = 'WebKey';
}
