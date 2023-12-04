import { Component } from "@angular/core";
import { Store } from "@ngxs/store";
import { News, NewsDto} from "_api";
import { Observable, takeUntil } from "rxjs";
import { BaseDestroyable } from "src/app/core/directives/base-destroyable/base-destroyable";
import { CreateNews, DeleteNews, UpdateNews } from "src/app/core/service/news/news.action";
import { NewsService } from "src/app/core/service/news/news.service";
import { ToastService } from "src/app/core/service/toast/toast.service";

@Component({
  selector: "app-news-management",
  templateUrl: "./news-management.component.html",
  styleUrls: ["./news-management.component.scss"],
})
export class NewsManagementComponent extends BaseDestroyable {
  public currentNews :News
  public isNewsFormVisible = false;
  public isUpdateMode = false;

  constructor(
    private newsService: NewsService,
    private toastService: ToastService,
    private store: Store
  ) {
    super();
  }

  public cancelNewsForm(isCancel: boolean): void {
    this.isNewsFormVisible = !isCancel;
  }

  // remove
  public removeNewsForm(): void {
    this.newsService
      .deleteNews$(this.currentNews.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.toastService.showSuccess("Success", "News is delete successfully");
        },
      });
    this.store.dispatch(new DeleteNews(this.currentNews.id));
    this.currentNews = undefined;
    this.isUpdateMode = false;
    this.isNewsFormVisible = false;
  }

  public onSelectedNewsChange(news: News): void {
    this.currentNews = news;
  }

  public onUpdateModeChange(isUpdateMode: boolean): void {
    this.isUpdateMode = isUpdateMode;
  }

  public onFormVisibleChange(isVisible: boolean): void {
    this.isNewsFormVisible = isVisible;
  }

  public handleNewsForm(news: NewsDto): void {
    const service$: Observable<News> = this.isUpdateMode
      ? this.newsService.updateNews$(this.currentNews.id, news)
      : this.newsService.createNews$(news)

    service$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.toastService.showSuccess(
          "Success",
          this.isUpdateMode ? "News is updated successfully" : "News is created successfully"
        );
        this.store.dispatch(this.isUpdateMode ? new UpdateNews(response) : new CreateNews(response));
      },
    });

    this.isNewsFormVisible = false;
  }
}
