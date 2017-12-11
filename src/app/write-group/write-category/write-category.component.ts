import { Component, OnInit } from '@angular/core';
import { Article } from './../../class-structure/article';
import { ArticlesService } from './../../services/articles.service';

@Component({
  selector: 'app-write-category',
  templateUrl: './write-category.component.html',
  styleUrls: ['./write-category.component.css']
})
export class WriteCategoryComponent implements OnInit {
    //define variables
    articles:Article[];
    constructor(private articlesService:ArticlesService) { }

    ngOnInit() {
        this.getArticlesByAuthorAndCategory();
    }

    getArticlesByAuthorAndCategory():void{
        this.articlesService.getArticlesByAuthorAndCategory()
            .subscribe( articles => this.articles = articles );
    }

}
