import {Injectable} from '@angular/core';
import {Menu} from "./Menu";
import {MENU} from "./mock-data/menu";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() {
  }

  getMenu(): Menu {
    return MENU;
  }
}


