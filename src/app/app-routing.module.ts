import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { CategoriesProductComponent } from './pages/categories-product/categories-product.component';
import { AccessGuard } from './shared/services/auth.guard';
import { HomeComponent } from './pages/home/home.component';
const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'auth',
        loadChildren: () =>
            import(
                './auth/auth.module'
            ).then((m) => m.AuthModule),
    },
    {
        path: 'products',
        component: ProductsComponent,
        canActivate: [AccessGuard], data: { role: 'admin' }
    },
    {
        path: 'categories-product',
        component: CategoriesProductComponent,
        canActivate: [AccessGuard], data: { role: 'user' }
    },
    {
        path: 'product/:id',
        component: ProductDetailsComponent,
        canActivate: [AccessGuard], data: { role: 'user' }
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }