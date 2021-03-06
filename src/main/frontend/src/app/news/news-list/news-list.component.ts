import {Component, OnInit} from '@angular/core';
import {NewsService} from "../news.service";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  newsArray = [];

  constructor(private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.onFetchNews();
  }

  onFetchNews() {
    this.newsService.getNews().subscribe(response => {
      this.newsArray = response;
    })
  }

}
