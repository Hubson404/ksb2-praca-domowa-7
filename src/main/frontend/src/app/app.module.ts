import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CarsComponent} from './cars/cars.component';
import {CarsListComponent} from './cars/cars-list/cars-list.component';
import {CarsAddComponent} from './cars/cars-add/cars-add.component';
import {CarsSearchComponent} from './cars/cars-search/cars-search.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {NewsListComponent} from './news/news-list/news-list.component';
import {NewsArticleComponent} from './news/news-article/news-article.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarsListComponent,
    CarsAddComponent,
    CarsSearchComponent,
    NewsListComponent,
    NewsArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
