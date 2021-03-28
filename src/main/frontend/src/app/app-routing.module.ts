import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsComponent} from "./cars/cars.component";
import {NewsListComponent} from "./news/news-list/news-list.component";

const routes: Routes = [
  {path: 'api/cars', component: CarsComponent},
  {path: 'api/news', component: NewsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
