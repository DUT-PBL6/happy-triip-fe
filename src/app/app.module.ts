import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxsModule } from "@ngxs/store";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MessageService } from "primeng/api";
import { HttpClientModule } from "@angular/common/http";
import { LoadingState } from "./core/service/loading/loading.state";
import { HeaderModule } from "./share/components/header/header.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastModule } from "primeng/toast";

@NgModule({
  declarations: [AppComponent],
  imports: [
    HeaderModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastModule,
    NgxsModule.forRoot([LoadingState]),
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
