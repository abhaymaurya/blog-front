import { Component, OnInit} from '@angular/core';
import { Article } from './../../class-structure/article';
import {HttpClient} from '@angular/common/http';
import { Http } from '@angular/http';
import { ArticlesService } from './../../services/articles.service';

@Component({
  selector: 'app-write-article',
  templateUrl: './write-article.component.html',
  styleUrls: ['./write-article.component.css']
})

export class WriteArticleComponent implements OnInit {
    constructor(private articlesService: ArticlesService ) { }
    article = new Article();
    articleImage = this.article.image;
    formData = new FormData();

    ngOnInit() {
    }

    onNotify(file:any):void {
        this.article.image = file;
    }

    showConfirmArticle():void{
        if(typeof this.article.image !== "undefined")
            this.formData.append('image', this.article.image, this.article.image.name);
        this.formData.append('text', this.article.text);
        this.formData.append('title', this.article.title);

        this.articlesService.upload(this.formData);
    }

}
