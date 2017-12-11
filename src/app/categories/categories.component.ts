import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../class-structure/category';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
    //parameter coming from parent component
    @Input() action:string;
    //define variables
    categories:Category[];
    selectedCategory:Category;
    //constructor
    constructor(
        private categoriesService:CategoriesService
    ) { }
    //functions, starting with ngOnInit
    ngOnInit() {
        this.getCategories();
    }

    selectCategory(category):void{
        this.selectCategory = category;
    }

    getCategories(){
        this.categoriesService.getCategories()
            .subscribe(categories=> this.categories = categories);
    }
}

