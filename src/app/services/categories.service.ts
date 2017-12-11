import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Category } from './../class-structure/category';
import { CATEGORIES } from './../mock-up-data/categories';

@Injectable()
export class CategoriesService {

    constructor() { }
    getCategories():Observable<Category[]>{
        return of(CATEGORIES);
    }

}
