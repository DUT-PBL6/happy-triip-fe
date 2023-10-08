import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PopularRoute } from "../../types/popular-route.type";
import { RouteService } from "src/app/core/service/route/route.service";

@Component({
  selector: "app-popular-routes",
  templateUrl: "./popular-routes.component.html",
  styleUrls: ["./popular-routes.component.scss"],
})
export class PopularRoutesComponent implements OnInit {
  public popularRoutes$: Observable<PopularRoute[]>;

  constructor(private routeService: RouteService) {}

  ngOnInit(): void {
    this.popularRoutes$ = this.routeService.getPopularRoutes$();
  }
}
