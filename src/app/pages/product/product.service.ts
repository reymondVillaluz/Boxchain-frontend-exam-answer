import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class ProductService {
    constructor(private http: HttpClient) {}

    
    getProductConfig(){
        // return this.http.get('/api/pconfig/');
        return {
            "name": "products",
            "title": "",
            "type": "table",
            "columndFields": [
                {
                    "columnName": "productName",
                    "columnDisplayName": "Product Name",
                    "isVisble": true,
                    "type": "string"
                }, {
                    "columnName": "stockCount",
                    "columnDisplayName": "Stock Count",
                    "isVisble": true,
                    "type": "number"
                }, {
                    "columnName": "manufacturer",
                    "columnDisplayName": "Manufacturer",
                    "isVisble": true,
                    "type": "string"
                }, {
                    "columnName": "description",
                    "columnDisplayName": "Product Description",
                    "isVisble": true,
                    "type": "string"
                }
            ]
        }
    }
    getProducts() {
        return this.http.get('/api/products/');
    }
}