import { Component, OnInit } from '@angular/core';

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
    {value: 'fr', viewValue: 'French'}
  ];

  selectedLang = this.languages[0].value;

  constructor() { }

  ngOnInit(): void {
  }

  selectLang(event: Event): void {
    this.selectedLang = (event.target as HTMLSelectElement).value;
  }
}
