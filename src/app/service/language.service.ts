import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(public translate: TranslateService) { }

  initialize(): void {
    this.translate.setDefaultLang('en');
    this.translate.addLangs(['en', 'fr']);
  }

  setCurrentLanguage(selectLang): void {
    localStorage.setItem('language', selectLang);
    this.translate.use(selectLang);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }
}
