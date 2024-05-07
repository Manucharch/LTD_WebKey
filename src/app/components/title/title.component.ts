import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements AfterViewInit {
  backgroundImageUrl: string = '../../../assets/img/flags/ge.svg';

  language: string = '';

  constructor() {
    this.language = localStorage.getItem('language') || 'ge';
  }

  ngAfterViewInit(): void {
    if (localStorage.getItem('language') == 'en') {
      this.backgroundImageUrl = '../../../assets/img/flags/eu.svg';
    } else {
      this.backgroundImageUrl = '../../../assets/img/flags/ge.svg';
    }
  }

  changeLanguage(): void {
    this.language = this.language === 'ge' ? 'en' : 'ge';
    localStorage.setItem('language', this.language);
    this.backgroundImageUrl =
      this.language === 'ge'
        ? '../../../assets/img/flags/ge.svg'
        : '../../../assets/img/flags/eu.svg';

        window.location.reload();
  }
}
