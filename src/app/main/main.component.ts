import { Component, OnInit } from '@angular/core';
import { MENU_CONTAINER } from '../menu-injector.token';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public readonly menuContainerToken = MENU_CONTAINER;

  constructor() { }

  ngOnInit() {
  }

}