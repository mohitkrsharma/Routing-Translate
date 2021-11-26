import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  currLanguage = 'en';
  constructor() {}
  setLanguage(lang: string) {
    this.currLanguage = lang;
  }
  getLanguage() {
    return this.currLanguage;
  }
}
