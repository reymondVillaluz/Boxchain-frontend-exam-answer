import { Component, Input } from '@angular/core';

@Component({
    selector:'f-data-table',
    templateUrl: './f.datatable.component.html',
    styleUrls: ['./f.datatable.component.css']
})

export class FDataTableComponent {
    @Input() rows : any;
    @Input() columns: Array<any> = [];

    
    constructor(){

    }


    
}