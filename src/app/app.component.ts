import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'store-app';
    dir: any = 'ltr';

    constructor(private translate: TranslateService) {
        translate.onLangChange.subscribe(x => {
            this.dir = x.lang == "en" ? "ltr" : "rtl"}
        )
    }

}
