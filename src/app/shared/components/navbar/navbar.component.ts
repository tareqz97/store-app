import { Component } from '@angular/core';
import { TranslateConfigService } from '../../services/translate-config.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    constructor(
        private translate: TranslateConfigService,
    ){
        this.currentLang = localStorage.getItem('language') || 'en';
        // this.translate.setLanguage(this.currentLang);
    }

    currentLang: string = 'en';

    setLanguageWithRefresh(lang: string) {
        this.translate.setLanguage(lang);
        localStorage.setItem('language', lang);
        this.currentLang = lang;
        window.location.reload();
    }

    setLangValue(value: string) {
        this.currentLang = value;
    };
}
