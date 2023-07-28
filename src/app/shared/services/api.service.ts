import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/prodect.model';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(
        private http: HttpClient
    ) { }

    private apiUrl = 'https://fakestoreapi.com';

    getProductsList(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.apiUrl}/products`);
    }

    addProduct(body: Product): Observable<Product> {
        return this.http.post<Product>(`${this.apiUrl}/products`, body);
    }

    editProduct(id:number,body: Product): Observable<Product> {
        return this.http.put<Product>(`${this.apiUrl}/products/${id}`, body);
    }

    getProductById(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
    }

    deleteProduct(id:number): Observable<Product> {
        return this.http.delete<Product>(`${this.apiUrl}/products/${id}`);
    }

    getProductListByCategory(category: string): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.apiUrl}/products/category/${category}`);
    }

}
