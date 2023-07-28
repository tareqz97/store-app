import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { CategoriesProductComponent } from './pages/categories-product/categories-product.component';
const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () =>
            import(
                './auth/auth.module'
            ).then((m) => m.AuthModule),
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'categories-product',
        component: CategoriesProductComponent
    },
    {
        path: 'product/:id',
        component: ProductDetailsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }