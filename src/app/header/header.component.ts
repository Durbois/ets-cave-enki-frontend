import { Component, OnInit, Input } from '@angular/core';
import { LanguageService } from '../service/language.service';
import { MatSidenav } from '@angular/material/sidenav';

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

  @Input()
  sidenav: MatSidenav;

  constructor(public languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.initialize();
  }

  selectLang(language: string): void {
    this.languageService.setCurrentLanguage(language);
  }
}
