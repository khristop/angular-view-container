import { InjectionToken, ViewContainerRef } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export const MENU_CONTAINER = new InjectionToken<BehaviorSubject<ViewContainerRef>>('MENU_CONTAINER');