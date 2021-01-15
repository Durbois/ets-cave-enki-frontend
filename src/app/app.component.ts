import { Component, OnInit, OnDestroy, ChangeDetectorRef, AfterViewInit, AfterContentInit } from '@angular/core';
import { LanguageService } from './service/language.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, Event as NavigationEvent, NavigationStart } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {

  event$;
  currentUrl: string;
  mobileQuery: MediaQueryList;
  year = new Date().getFullYear();
  title = `Ets les caves d'Enki`;

  // tslint:disable-next-line:variable-name
  private _mobileQueryListener: () => void;

  constructor(private languageService: LanguageService,
              private router: Router,
              private changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              private location: Location) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.languageService.initialize();

    this.event$
      = this.router.events
          .subscribe(
            (event: NavigationEvent) => {
              if ( event instanceof NavigationStart) {
                this.currentUrl = event.url;
              }
            });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.event$.unsubscribe();
  }

  selectLang(language: string): void {
    this.languageService.setCurrentLanguage(language);
  }
}
