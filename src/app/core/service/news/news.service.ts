import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";

import { ApiService } from "../base-api/api.service";
import { News, NewsDto } from "_api";

@Injectable({ providedIn: "root" })
export class NewsService {
  constructor(protected apiService: ApiService) {}

  public getAllNewsOfPartner$(): Observable<News[]> {
    return this.apiService.api.newsGetAllNewsOfPartner();
  }
  public createNews$(newsDto: NewsDto): Observable<News> {
    return this.apiService.api.newsCreateNews(newsDto);
  }

  public updateNews$(id: number, newsDto: NewsDto): Observable<News> {
    return this.apiService.api.newsUpdateNews(id, newsDto);
  }
  public deleteNews$(id: number): Observable<News> {
    return this.apiService.api.newsDeleteNews(id);
  }
}
