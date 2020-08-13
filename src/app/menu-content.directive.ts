import { Directive, InjectionToken, Injector, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Directive({
  selector: '[appMenuContent]'
})
export class MenuContentDirective implements OnDestroy {
  private subscription: Subscription;
  private lastContainer: ViewContainerRef;

  constructor(
    private templateRef: TemplateRef<any>,
    private injector: Injector,
  ) {}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    if (this.lastContainer) {
      this.lastContainer.clear();
    }
  }

  @Input() set appMenuContent(containerToken: InjectionToken<BehaviorSubject<ViewContainerRef>>) {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = this.injector.get(containerToken).asObservable().subscribe(vcr =>  {
      if (this.lastContainer) {
        this.lastContainer.clear();
      }
      this.lastContainer = vcr;
      if (vcr) {
        vcr.createEmbeddedView(this.templateRef);
      }
    });
  }
}
