import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {News} from "../news.model";
import {NgForm} from "@angular/forms";
import {NewsService} from "../news.service";

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.css']
})
export class NewsArticleComponent implements OnInit {

  @Input() newsArticle: News;
  @ViewChild('newsForm') newsForm: NgForm;

  tempTitle: string;
  tempSummary: string;
  isBeingEdited = false;

  constructor(private newsService: NewsService) {
  }

  ngOnInit(): void {
  }

  onEditArticle() {
    this.isBeingEdited = true;
    this.tempTitle = this.newsArticle.title;
    this.tempSummary = this.newsArticle.summary;
  }

  onSubmit() {
    this.newsArticle.title = this.newsForm.value.title;
    this.newsArticle.summary = this.newsForm.value.summary;
    this.newsService.modifyNews(this.newsArticle);
    this.isBeingEdited = false;
  }

  onAbortEdit() {
    this.newsForm.reset();
    this.isBeingEdited = false;
  }

}
