import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";

import { News, Station } from "_api";
import { Observable, tap } from "rxjs";
import { NewsService } from "./news.service";
import { CreateNews, DeleteNews, GetAllNews, GetAllNewsOfPartner, UpdateNews } from "./news.action";

interface INewsState {
  news: News[];
  listNews: News[];
}
@State<INewsState>({
  name: "news",
  defaults: {
    news: [],
    listNews: [],
  },
})
@Injectable()
export class NewsState {
  @Selector()
  public static getAllNewsOfPartner(state: INewsState): News[] {
    return state.news;
  }
  @Selector()
  public static getAllNews(state: INewsState): News[] {
    return state.listNews;
  }
  constructor(private newsService: NewsService) {}

  @Action(GetAllNewsOfPartner)
  public getAllNewsOfPartner$(ctx: StateContext<INewsState>): Observable<News[]> {
    ctx.patchState({ news: [] });
    return this.newsService.getAllNewsOfPartner$().pipe(
      tap({
        next: (news) => ctx.patchState({ news }),
      })
    );
  }
  @Action(GetAllNews)
  public getAllNews$(ctx: StateContext<INewsState>): Observable<News[]> {
    ctx.patchState({ news: [] });
    return this.newsService.getAllNews$().pipe(
      tap({
        next: (listNews) => ctx.patchState({ listNews }),
      })
    );
  }

  @Action(CreateNews)
  public createNews$(ctx: StateContext<INewsState>, action: CreateNews): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      news: [...state.news, action.news],
    });
  }

  @Action(UpdateNews)
  public updateNews$(ctx: StateContext<INewsState>, action: UpdateNews): void {
    const state = ctx.getState();
    const updatedNews = state.news.map((n) => {
      if (n.id === action.news.id) return action.news;
      return n;
    });
    ctx.setState({
      ...state,
      news: updatedNews,
    });
  }

  @Action(DeleteNews)
  public deleteStation$(ctx: StateContext<INewsState>, action: DeleteNews): void {
    const state = ctx.getState();
    const updatedNews = state.news.filter((n) => n.id !== action.newsId);
    ctx.setState({
      ...state,
      news: updatedNews,
    });
  }
}
