import { Component, OnInit } from '@angular/core';
import { HeadingService } from '../services/heading.service';
import { Heading } from '../top-menu';

@Component({
    selector: 'app-top-menu',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
    headings: Heading[];
    selectedHeading:Heading;
    constructor(private headingService: HeadingService) { }

    ngOnInit() {
        this.getHeadings();
    }

    select(heading: Heading): void{
        this.selectedHeading = heading;
    }

    getHeadings(): void{
        this.headingService.getHeadings()
            .subscribe(headings => this.headings = headings);
    }

}
