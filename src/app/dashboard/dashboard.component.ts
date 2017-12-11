import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../services/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    sections: string[];
    constructor(private dashboardService: DashboardService, private router: Router) { }

    ngOnInit() {
        this.getSections();
    }

    getSections(){
        this.dashboardService.getSections();
        this.dashboardService.sections$.subscribe(
            sections => this.sections = sections
        );
    }
}
