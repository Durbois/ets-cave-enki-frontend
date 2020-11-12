import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../service/language.service';

interface Language {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  languages: Language[] = [
    {value: 'en', viewValue: 'English'},
    {value: 'fr', viewValue: 'Français'}
  ];

  selectedLang: string;

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.initialize();
    this.selectedLang = localStorage.getItem('language')
    || this.languageService.getCurrentLanguage();
  }

  selectLang(event: Event): void {
    this.selectedLang = (event.target as HTMLSelectElement).value;
    this.languageService.setCurrentLanguage(this.selectedLang);
  }
}
