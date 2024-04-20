import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements AfterViewInit {
  backgroundImageUrl: string = '../../../assets/img/flags/ge.svg';

  constructor() {}

  ngAfterViewInit(): void {
    if (localStorage.getItem('language') == 'en') {
      this.backgroundImageUrl = '../../../assets/img/flags/eu.svg';
    } else {
      this.backgroundImageUrl = '../../../assets/img/flags/ge.svg';
    }
  }

  changeLanguage(): void {
    if (localStorage.getItem('language') == 'ge') {
      localStorage.setItem('language', 'en');
      this.backgroundImageUrl = '../../../assets/img/flags/eu.svg';
      window.location.reload();
    } else {
      localStorage.setItem('language', 'ge');
      this.backgroundImageUrl = '../../../assets/img/flags/ge.svg';
      window.location.reload();
    }
  }
}
