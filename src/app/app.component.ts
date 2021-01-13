import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { LanguageService } from './service/language.service';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  title = `Ets les caves d'Enki`;

  // tslint:disable-next-line:variable-name
  private _mobileQueryListener: () => void;

  constructor(private languageService: LanguageService,
              changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.languageService.initialize();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  selectLang(language: string): void {
    this.languageService.setCurrentLanguage(language);
  }
}
