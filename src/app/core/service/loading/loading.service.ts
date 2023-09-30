import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class LoadingService {
  private isShowProgressSpinner = true;
  private progressing = new BehaviorSubject<boolean>(false);
  private counter = 0;

  public isProgressing$(): Observable<boolean> {
    return this.progressing.asObservable();
  }

  public setProgressSpinnerDisplay(isShowProgressSpinner: boolean): void {
    this.isShowProgressSpinner = isShowProgressSpinner;
  }

  public startProgress(): void {
    if (this.isShowProgressSpinner) {
      this.counter++;
      this.progressing.next(true);
    }
  }

  public stopProgress(): void {
    this.counter--;
    if (!this.counter || !this.isShowProgressSpinner) {
      this.counter = 0;
      this.progressing.next(false);
    }
  }
}
