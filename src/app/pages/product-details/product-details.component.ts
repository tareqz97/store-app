import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/prodect.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

    constructor(
        private spinner: NgxSpinnerService,
        private api: ApiService,
        private route: ActivatedRoute
    ){}

    productId: number = 0;
    product: Product | null = null;

    ngOnInit(): void {
        this.productId = Number(this.route.snapshot.paramMap.get('id'));
        this.getData(this.productId)
    }

    getData(id: number) {
        try {
            this.spinner.show();
            this.api.getProductById(id).subscribe(data => {
                if (data) {
                    this.product = data;
                }
            })
        } catch (error) {

        } finally {
            setTimeout(() => {
                this.spinner.hide();
            }, 1000);
        }
    }

}
