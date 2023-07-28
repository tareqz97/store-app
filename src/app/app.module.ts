import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './pages/products/products.component';
import { AddProductComponent } from './pages/products/add-product/add-product.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { CategoriesProductComponent } from './pages/categories-product/categories-product.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        ProductsComponent,
        AddProductComponent,
        CategoriesProductComponent,
        ProductDetailsComponent
    ],
    imports: [
        AppRoutingModule,
        // BrowserModule,
        HttpClientModule,
        SharedModule,
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        BrowserAnimationsModule,
        NgxSpinnerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
