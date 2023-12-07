import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxsModule } from "@ngxs/store";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MessageService } from "primeng/api";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { LoadingState } from "./core/service/loading/loading.state";
import { HeaderModule } from "./share/components/header/header.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastModule } from "primeng/toast";
import { ProgressSpinnerComponentModule } from "./share/components/progress-spinner/progress-spinner.module";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { ApiService } from "./core/service/base-api/api.service";
import { EmployeeState } from "./core/service/employee/employee.state";
import { TransportState } from "./core/service/transport/transport.state";
import { StationState } from "./core/service/station/station.state";
import { RouteState } from "./core/service/route/route.state";
import { PartnerState } from "./core/service/partner/partner.state";
import { BookingState } from "./core/service/booking/booking.state";
import { NewsState } from "./core/service/news/news.state";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    HeaderModule,
    ProgressSpinnerComponentModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastModule,
    NgxsModule.forRoot([
      LoadingState,
      EmployeeState,
      TransportState,
      StationState,
      RouteState,
      PartnerState,
      BookingState,
      NewsState,
    ]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [MessageService, ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
