import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';

const LOCALIZATION_LOCAL_STORAGE_KEY = 'language';

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ar']);
    let lang: string = localStorage.getItem(LOCALIZATION_LOCAL_STORAGE_KEY) || 'en';
    translate.setDefaultLang(lang);
  }

  setLanguage(lang: string) {
    if (lang) {
      this.translate.use(this.translate.getDefaultLang());
      this.translate.use(lang);
      localStorage.setItem(LOCALIZATION_LOCAL_STORAGE_KEY, lang);
    }
  }

  /**
   * Returns selected language
   */
  getSelectedLanguage(): string {
    return (
      localStorage.getItem(LOCALIZATION_LOCAL_STORAGE_KEY) ||
      this.translate.getDefaultLang()
    );
  }

}
