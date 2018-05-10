import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {
    constructor(private http: HttpClient){}
    getMainView(){
        return this.http.get('/api/mainview/');
    }
}