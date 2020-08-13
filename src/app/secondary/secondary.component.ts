import { Component, OnInit } from '@angular/core';
import { MENU_CONTAINER } from '../menu-injector.token';

@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.css']
})
export class SecondaryComponent implements OnInit {
  public readonly feedMenuBarContainerToken = MENU_CONTAINER;
  constructor() { }

  ngOnInit() {
  }

}