import { Component, OnInit } from '@angular/core';
import { MENU_CONTAINER } from '../menu-injector.token';

@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.css']
})
export class SecondaryComponent implements OnInit {
  public readonly menuContainerToken = MENU_CONTAINER;
  constructor() { }

  ngOnInit() {
  }

}