import { TestBed } from '@angular/core/testing';

import { LanguageService } from './language.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { async } from 'q';

describe('LanguageService', () => {
  let service: LanguageService;
  let translate: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [LanguageService]
    });
    service = TestBed.inject(LanguageService);
    translate = TestBed.inject(TranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test initialize', async () => {
    service.initialize();

    expect(translate.getLangs.length).toEqual(2);
    expect(translate.defaultLang).toBe('en');
  });
});
