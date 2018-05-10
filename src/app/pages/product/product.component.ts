import { Component }  from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ProductService } from './product.service';



@Component({
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})


export  class ProductComponent {
    rows: any;
    columns: Array<any> = [];
    productConfig: any;

    constructor(private productSrv: ProductService) {
    //    this.productSrv.getProductConfig().subscribe(data => {
    //          this.productConfig = data;
    //     })
    }


    ngOnInit(){
        this.productConfig = this.productSrv.getProductConfig();
        this.productConfig.columndFields.forEach(d => {
            this.columns.push({
                prop: d.columnName,
                name: d.columnDisplayName,
                headerClass:  d.isVisble == true ? "show" : "hide",
                flexGrow:1
            });
        });
        this.productSrv.getProducts().subscribe(data => {
            this.rows = data
        });
    }

}