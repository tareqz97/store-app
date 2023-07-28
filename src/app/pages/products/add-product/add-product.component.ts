import { NgxSpinnerService } from 'ngx-spinner';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/shared/models/prodect.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
    mode: string;
    id: number;
}

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

    constructor(
        private api: ApiService,
        private spinner: NgxSpinnerService,
        public dialogRef: MatDialogRef<AddProductComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) { }

    productForm = new FormGroup({
        title: new FormControl("", [Validators.required]),
        price: new FormControl<number | null>(null, [Validators.required]),
        category: new FormControl("", [Validators.required]),
        description: new FormControl("", [Validators.required]),
    });

    get title() {
        return this.productForm.get('title');
    }
    get price() {
        return this.productForm.get('price');
    }
    get category() {
        return this.productForm.get('category');
    }
    get description() {
        return this.productForm.get('description');
    }

    ngOnInit(): void {
        if (this.data.mode == 'edit') {
            this.getData();
        }

    }

    getData() {
        try {
            this.spinner.show();
            this.api.getProductById(this.data.id).subscribe(data => {
                if (data) {
                    this.productForm.patchValue({
                        title: data.title,
                        price: data.price,
                        category: data.category,
                        description: data.description
                    })
                }
            })
        } catch (error) {

        } finally {
            this.spinner.hide();
        }
    }

    saveChanges() {
        if (this.productForm.invalid) {
            return;
        }
        this.spinner.show();
        try {
            let formData = this.productForm.value;
            let body: Product = {
                title: formData.title!,
                price: formData.price!,
                category: formData.category!,
                description: formData.description!
            }
            if(this.data.mode == 'add'){
                this.api.addProduct(body).subscribe(res => {
                    this.dialogRef.close('save');
                });
            } else {
                this.api.editProduct(this.data.id,body).subscribe(res => {
                    this.dialogRef.close('save');
                });
            }
            
        } catch (error) {

        } finally {
            this.spinner.hide();
        }
    }

    close() {
        this.dialogRef.close('close');
    }

}
