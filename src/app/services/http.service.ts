import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class HttpService {

    constructor() { }

    getHeaders(refreshToken:boolean = false): HttpHeaders{
        let header = new HttpHeaders();
        header = header.set('Content-Type', 'application/json; charset=utf-8');

        if((typeof localStorage.getItem('accessToken') !== "undefined")&&(!refreshToken)){
            header = header.set('Authorization', 'Bearer '+localStorage.getItem('accessToken'));
        }

        if(refreshToken){
            header = header.set('Authorization', 'Bearer '+localStorage.getItem('refreshToken'));
        }

        return header;
    }

}
