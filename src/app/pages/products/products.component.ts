import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApiService } from 'src/app/shared/services/api.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { AddProductComponent } from './add-product/add-product.component';
import { Product } from 'src/app/shared/models/prodect.model';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'rating', 'action'];
    dataSource = new MatTableDataSource<Product>([]);
    successAlert: boolean = false;
    constructor(
        private api: ApiService,
        private dialog: MatDialog,
        private spinner: NgxSpinnerService
    ) { }

    @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

    ngOnInit(): void {
        this.getProductsList();
    }

    getProductsList() {
        this.spinner.show();
        try {
            this.api.getProductsList().subscribe(res => {
                if (res) {
                    this.dataSource = new MatTableDataSource<Product>(res);
                    this.dataSource.paginator = this.paginator;
                }
            }
            );
        } catch (error) {
            console.log(error);
        } finally {
            setTimeout(() => {
                this.spinner.hide();
            }, 500);
        }
    }

    addProduct() {
        const dialogRef = this.dialog.open(AddProductComponent, {
            width: "35rem",
            data: {
                mode: 'add'
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result == "save") {
                this.successAlert = true;
                setTimeout(() => {
                    this.successAlert = false;
                }, 3000);
            }
        });
    }

    editProduct(id: number) {
        const dialogRef = this.dialog.open(AddProductComponent, {
            width: "35rem",
            data: {
                mode: 'edit',
                id: id
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result == "save") {
                this.successAlert = true;
                setTimeout(() => {
                    this.successAlert = false;
                }, 3000);
            }
        });
    }

    deleteProduct(id: number) {
        try {
            this.spinner.show();
            this.api.deleteProduct(id).subscribe(res => {
                if (res) {
                    this.successAlert = true;
                    setTimeout(() => {
                        this.successAlert = false;
                    }, 3000);
                }
            })
        } catch (error) {
            console.log(error);
        } finally {
            this.spinner.hide();
        }
    }
}
