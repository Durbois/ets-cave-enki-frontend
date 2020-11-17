import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.addLangs(['en', 'fr']);
  }

  initialize(): void {
    this.translate.use(localStorage.getItem('language')
    || this.getCurrentLanguage());
  }

  setCurrentLanguage(selectLang): void {
    localStorage.setItem('language', selectLang);
    this.translate.use(selectLang);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }
}
