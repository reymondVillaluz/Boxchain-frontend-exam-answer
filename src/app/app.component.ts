import { Component } from '@angular/core';
import { AppService } from './app.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'app';
   mainview: any;
    constructor(private appSrv: AppService) {
        this.appSrv.getMainView().subscribe(data => {
            this.mainview = data;
        });
    }

    ngOninit() {
    }

    ngAfterViewInit(){
        this.appSrv.getMainView().subscribe(data => {
            this.mainview = data;
        });
    }
}
