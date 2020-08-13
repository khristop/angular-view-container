import { Directive, InjectionToken, Injector, Input, OnDestroy, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Directive({
  selector: '[appMenuInjector]'
})
export class MenuInjectorDirective {

  lastSubject: Subject<ViewContainerRef>;

  constructor(
    private viewContainer: ViewContainerRef,
    private injector: Injector,
    ) {}

  ngOnDestroy() {
    if (this.lastSubject) {
      this.lastSubject.next(null);
    }
  }

  @Input() set msuiInjectedContainer(containerToken: InjectionToken<BehaviorSubject<ViewContainerRef>>) {
    if (this.lastSubject) {
      this.lastSubject.next(null);
    }

    this.lastSubject = this.injector.get(containerToken);
    this.lastSubject.next(this.viewContainer);
  }
}