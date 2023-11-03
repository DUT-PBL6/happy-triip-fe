import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "happy-triip";

  constructor(public translate: TranslateService) {
    translate.addLangs(["en"]);
    translate.setDefaultLang("en");
    translate.use("en");
  }
}
