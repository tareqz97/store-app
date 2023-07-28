import { NgModule } from "@angular/core";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatSelect, MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        // BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
            defaultLanguage: localStorage.getItem('language') || 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        NavbarComponent,
        TranslateModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule
    ],
    providers: [],
})
export class SharedModule { }