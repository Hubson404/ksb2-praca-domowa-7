import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {News} from "./news.model";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsArray: News[] = [];

  constructor(private http: HttpClient) {
  }

  getNews() {
    return this.http.get<News[]>('http://localhost:8080/news')
      .pipe(map((response) => {
          this.newsArray = response;
          return this.newsArray;
        }
      ))
  }

  modifyNews(modifiedArticle: News) {
    this.http.put(
      'http://localhost:8080/news/' + modifiedArticle.newsId,
      modifiedArticle).subscribe();
  }
}
