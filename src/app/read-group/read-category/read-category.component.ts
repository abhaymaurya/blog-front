import { Component, OnInit } from '@angular/core';
import { Article } from './../../class-structure/article';
import { ArticlesService } from './../../services/articles.service';

@Component({
  selector: 'app-read-category',
  templateUrl: './read-category.component.html',
  styleUrls: ['./read-category.component.css']
})
export class ReadCategoryComponent implements OnInit {
    //define variables
    articles:Article[];
    constructor(private articlesService:ArticlesService) { }

    ngOnInit() {
        this.getArticlesByCategory();
    }

    getArticlesByCategory():void{
        this.articlesService.getArticlesByCategory()
            .subscribe( articles => this.articles = articles );
    }
}
