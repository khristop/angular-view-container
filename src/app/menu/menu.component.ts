import { Component, OnInit } from '@angular/core';
import { MENU_CONTAINER } from '../menu-injector.token';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public readonly menuBarContainerToken = MENU_CONTAINER;
  constructor() { }

  ngOnInit() {
  }

}