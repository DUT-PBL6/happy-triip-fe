import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
  public value: string;

  constructor(private router: Router) {}

  public onNavigate(url: string): void {
    this.router.navigate([`${url}`]);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
