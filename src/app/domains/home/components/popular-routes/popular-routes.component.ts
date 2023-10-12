import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PopularRoute } from "../../types/popular-route.type";
import { RouteService } from "src/app/core/service/route/route.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-popular-routes",
  templateUrl: "./popular-routes.component.html",
  styleUrls: ["./popular-routes.component.scss"],
})
export class PopularRoutesComponent implements OnInit {
  public popularRoutes$: Observable<PopularRoute[]>;
  public popularRoutesTitle: string;

  constructor(
    private routeService: RouteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.popularRoutes$ = this.routeService.getPopularRoutes$();
    this.route.url.subscribe((urlSegments) => {
      this.popularRoutesTitle = urlSegments[0] ? "You might be interested in" : "Popular Routes";
    });
  }
}
