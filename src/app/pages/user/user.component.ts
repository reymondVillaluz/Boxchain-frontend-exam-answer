import {Component}  from '@angular/core';
import { UserService } from './user.service';

@Component({
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})

export  class UserComponent {
    rows : any;
    userConfig : any;


    constructor(private userSrv : UserService){

    }

    ngOnInit(){
        this.userConfig = this.userSrv.getUsersConfig();
        this.userSrv.getUsers().subscribe(data => {
            this.rows = data;
        })
    }
}