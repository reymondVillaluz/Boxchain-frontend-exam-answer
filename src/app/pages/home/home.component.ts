import {Component}  from '@angular/core';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})


export  class HomeComponent {
    mainview: any;

    constructor(){
        this.mainview = {
            "name": "mainview",
            "menu": [
                {
                    "name": "users",
                    "displayName": "Users"
                }, {
                    "name": "products",
                    "displayName": "Products"
                }
            ],
            "content": "<div><p>testing</p></div>"
        }

    }

    ngOninit() {
        
    }
}