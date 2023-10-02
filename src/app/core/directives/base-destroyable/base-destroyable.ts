import { Directive, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

/**
 * This base class provides functionality to derived component class to allow for automatically
 * unsubscribe from subscribed observable with the following pipe:`.pipe(takeUntil(this.destroy$))`
 */
@Directive()
export abstract class BaseDestroyable implements OnDestroy {
  private destroySource = new Subject<void>();

  public ngOnDestroy(): void {
    this.destroySource.next();
    this.destroySource.complete();
  }

  protected get destroy$() {
    return this.destroySource.asObservable();
  }
}
