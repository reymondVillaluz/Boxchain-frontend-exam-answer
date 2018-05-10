import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

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
            "content": "<div>Sample content</div>"
        }

    }

    ngOninit() {
        
    }
}
