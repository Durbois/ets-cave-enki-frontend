import { Component, OnInit } from '@angular/core';
import { LanguageService } from './service/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  title = `Ets les caves d'Enki`;

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.initialize();
  }

  selectLang(language: string): void {
    this.languageService.setCurrentLanguage(language);
  }
}
