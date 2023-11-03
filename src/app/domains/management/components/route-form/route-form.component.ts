import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Route, RouteDto } from "_api";
import { validate } from "src/app/share/helpers/form.helper";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-route-form",
  templateUrl: "./route-form.component.html",
  styleUrls: ["./route-form.component.scss"],
})
export class RouteFormComponent implements OnInit {
  @Input() selectedRoute: Route;
  @Input() updateMode: boolean;
  @Output() cancelRouteForm = new EventEmitter<boolean>();
  @Output() form = new EventEmitter<RouteDto>();
  public routeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.initRouteForm();
  }

  private initRouteForm(): void {
    this.routeForm = this.fb.group({
      name: ["", Validators.required],
    });
  }

  public get name(): FormControl {
    return this.routeForm.get("name") as FormControl;
  }

  public submit(): void {}

  public validate(fieldControl: FormControl): boolean {
    return validate(fieldControl);
  }
}
