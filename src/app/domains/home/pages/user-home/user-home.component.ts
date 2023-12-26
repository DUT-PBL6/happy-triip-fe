import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Select, Store } from "@ngxs/store";
import { News } from "_api";
import { Observable, map, takeUntil } from "rxjs";
import { BaseDestroyable } from "src/app/core/directives/base-destroyable/base-destroyable";
import { GetAllNews } from "src/app/core/service/news/news.action";
import { NewsState } from "src/app/core/service/news/news.state";

@Component({
  selector: "app-user-home",
  templateUrl: "./user-home.component.html",
  styleUrls: ["./user-home.component.scss"],
})
export class UserHomeComponent extends BaseDestroyable {
  @Select(NewsState.getAllNews) public listNews$: Observable<News[]>;
  constructor(
    private router: Router,
    private store: Store
  ) {
    super();
  }
  ngOnInit(): void {
    if (this.store.selectSnapshot(NewsState.getAllNews).length === 0) this.store.dispatch(new GetAllNews());
  }

  public latestNews = [
    {
      id: "1",
      title: "Hello summer with Vietnam Travel Bus! Discount 20% off for the new routes",
      date: "30 July 2023",
    },
    {
      id: "2",
      title: "Vietnam Travel Bus becomes one of the biggest bus companies in Asia!",
      date: "12 March 2023",
    },
    {
      id: "3",
      title: "Vietnam Travel Bus is opening a new route from Sa Pa to Hoi An",
      date: "14 February 2023",
    },
  ];

  public getNumberRange(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, index) => index + start);
  }

  public onClickMoreAboutUs(): void {
    this.router.navigate(["/about-us"]);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
