import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Select, Store } from "@ngxs/store";
import { News } from "_api";
import { Observable, takeUntil } from "rxjs";
import { BaseDestroyable } from "src/app/core/directives/base-destroyable/base-destroyable";
import { GetAllNews } from "src/app/core/service/news/news.action";
import { NewsService } from "src/app/core/service/news/news.service";
import { NewsState } from "src/app/core/service/news/news.state";

@Component({
  selector: "app-news-page",
  templateUrl: "./news-page.component.html",
  styleUrls: ["./news-page.component.scss"],
})
export class NewsPageComponent extends BaseDestroyable implements OnInit {
  @Select(NewsState.getAllNews) public listNews$: Observable<News[]>;
  private slug: string;
  public news: News;
  public imagesNews: string;
  public listTags = [
    { id: "1", name: "airport" },
    { id: "2", name: "tourguide" },
    { id: "3", name: "Hoi An" },
    { id: "4", name: "Ha Noi" },
    { id: "5", name: "Da Nang" },
    { id: "6", name: "Travelbus" },
    { id: "7", name: "Hue" },
    { id: "8", name: "Vietnam" },
  ];

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private router: Router,
    private store: Store
  ) {
    super();
  }

  ngOnInit() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (this.store.selectSnapshot(NewsState.getAllNews).length === 0) this.store.dispatch(new GetAllNews());

    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      if (params.slug === "" || params.slug === undefined) {
        this.router.navigate(["/news"]);
        return;
      }
      this.slug = params.slug;
      this.getNewsBySlug();
    });
  }

  private getNewsBySlug(): void {
    this.newsService
      .getNewsBySlug$(this.slug)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (newsDetails) => {
          this.news = newsDetails;
          this.imagesNews =
            newsDetails.images && newsDetails.images.length > 0
              ? newsDetails.images[0]
              : "assets/images/news/default-news-image.jpg";
        },
        error: () => {
          this.router.navigate(["/news"]);
        },
      });
  }
}
