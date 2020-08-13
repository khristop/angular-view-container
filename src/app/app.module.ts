import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuContainerDirective } from './menu-container.directive';
import { MainComponent } from './main/main.component';
import { SecondaryComponent } from './secondary/secondary.component';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule ],
  declarations: [ AppComponent, HelloComponent, MenuContainerDirective, MainComponent, SecondaryComponent, MenuComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
