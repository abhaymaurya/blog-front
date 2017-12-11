import { Component, OnInit, Input } from '@angular/core';
import { Heading } from '../top-menu';

@Component({
  selector: 'app-heading-description',
  templateUrl: './heading-description.component.html',
  styleUrls: ['./heading-description.component.css']
})
export class HeadingDescriptionComponent implements OnInit {
    @Input() heading:Heading;
    constructor() { }

    ngOnInit() {
    }

}
