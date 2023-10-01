import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxsModule } from "@ngxs/store";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MessageService } from "primeng/api";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { LoadingState } from "./core/service/loading/loading.state";
import { HeaderModule } from "./share/components/header/header.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastModule } from "primeng/toast";
import { ProgressSpinnerComponentModule } from "./share/components/progress-spinner/progress-spinner.module";
import { AuthInterceptorService } from "./core/interceptors/auth.interceptor";

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
    NgxsModule.forRoot([LoadingState]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
