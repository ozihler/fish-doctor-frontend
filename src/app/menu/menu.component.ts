import { Component, OnInit } from '@angular/core';
import {MenuService} from "./menu.service";
import {Menu} from "./Menu";

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: Menu;

  constructor(private menuService:MenuService) { }

  ngOnInit() {
    this.getMenu();
  }

  private getMenu():void {
    this.menu = this.menuService.getMenu();
  }
}
