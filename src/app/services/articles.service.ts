import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Article } from './../class-structure/article';
import * as CONSTANTS from './../mock-up-data/articles';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ArticlesService {

    constructor(private http: HttpClient) { }

    getArticlesByAuthorAndCategory():Observable<Article[]>{
        return of(CONSTANTS.TRAVELARTICLESBYAUTHOR);
    }

    getArticlesByCategory():Observable<Article[]>{
        return of(CONSTANTS.TRAVELARTICLES);
    }

    upload(formData){
        this.http
        .post('http://test.dev/api/saveArticle', formData)
        .subscribe(data => {
            console.log(data);
        });
    }
}
