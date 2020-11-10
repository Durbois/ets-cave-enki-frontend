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
    this.translate.use('en');
  }

  setTransLanguage(selectLang): void {
    this.translate.use(selectLang);
  }

  getTransLanguage(): string[] {
    return this.translate.getLangs();
  }
}
