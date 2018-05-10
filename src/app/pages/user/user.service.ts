import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
   constructor(private http: HttpClient) {}

   getUsersConfig()  {
        //  return this.http.get('/api/uconfg/');
        return {
            "name": "user",
            "title": "Users",
            "type": "card",
            "columndFields": [
                {
                    "columnName": "displayImage",
                    "columnDisplayName": "Display image",
                    "isVisble": true,
                    "type": "image"
                }, {
                    "columnName": "fullname",
                    "columnDisplayName": "Full name",
                    "isVisble": true,
                    "type": "string"
                }, {
                    "columnName": "role",
                    "columnDisplayName": "Role",
                    "isVisble": true,
                    "type": "string"
                }, {
                    "columnName": "bio",
                    "columnDisplayName": "Bio",
                    "isVisble": true,
                    "type": "string"
                }
            ]
        }

   }

    getUsers(){
        return this.http.get('/api/users/');
    }

}