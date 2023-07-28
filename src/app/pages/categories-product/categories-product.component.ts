import { NgxSpinnerService } from 'ngx-spinner';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Product } from 'src/app/shared/models/prodect.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-categories-product',
    templateUrl: './categories-product.component.html',
    styleUrls: ['./categories-product.component.scss']
})
export class CategoriesProductComponent {

    constructor(
        private spinner: NgxSpinnerService,
        private api: ApiService
    ) { }

    productsList: Product[] = [];
    category: string = '';

    categoryForm = new FormGroup({
        category: new FormControl('')
    })

    ngOnInit(): void {
        // this.getProductsList();
        setTimeout(() => {
            this.categoryForm.patchValue({
                category: 'all'
            })
        }, 100);
    }

    getProductsList(category: string) {
        this.spinner.show();
        try {
            if (category == 'all') {
                this.api.getProductsList().subscribe(res => {
                    if (res) {
                        this.productsList = res;
                    }
                });
            } else {
                this.api.getProductListByCategory(category).subscribe(res => {
                    if (res) {
                        this.productsList = res;
                    }
                });
            }
        } catch (error) {
            console.log(error);
        } finally {
            setTimeout(() => {
                this.spinner.hide();
            }, 500);
        }
    }

    changeCategory(val: string) {
        this.getProductsList(val);
    }

}
