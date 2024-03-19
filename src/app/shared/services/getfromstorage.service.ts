import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetfromstorageService {
  constructor() {}

  getLanguage(): string {
    var lang = localStorage.getItem('language');

    return lang === null ? 'ge' : lang;
  }
}
