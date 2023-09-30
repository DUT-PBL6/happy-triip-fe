import { Component } from "@angular/core";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { LoadingState } from "src/app/core/service/loading/loading.state";

@Component({
  selector: "app-progress-spinner",
  templateUrl: "./progress-spinner.component.html",
  styleUrls: ["./progress-spinner.component.scss"],
})
export class ProgressSpinnerComponent {
  @Select(LoadingState.isShowProgressSpinner) public isShowProgressSpinner$!: Observable<boolean>;
}
