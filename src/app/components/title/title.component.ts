import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  animations: [
    trigger('scaleOnInit', [
      transition(':enter', [
        style({ transform: 'scale(0, 1)' }),
        animate('500ms ease-out', style({ transform: 'scale(1, 1)' }))
      ])
    ])
  ]
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
