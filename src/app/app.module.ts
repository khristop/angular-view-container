import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuContainerDirective } from './menu-container.directive';
import { MenuContentDirective } from './menu-content.directive';
import { MainComponent } from './main/main.component';
import { SecondaryComponent } from './secondary/secondary.component';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { MENU_CONTAINER } from './menu-injector.token';
import { BehaviorSubject } from 'rxjs';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, MenuContainerDirective, MenuContentDirective, MainComponent, SecondaryComponent, MenuComponent ],
  bootstrap:    [ AppComponent ],
  providers: [{ provide: MENU_CONTAINER, useValue: new BehaviorSubject(null) }],
})
export class AppModule { }
