import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Heading } from '../top-menu';
import { HEADINGS } from '../top-menu-content';

@Injectable()
export class HeadingService {

    constructor() { }

    getHeadings(): Observable<Heading[]> {
        return of(HEADINGS);
    }
}
