import {Menu} from "../Menu";
import {MenuNode} from "../MenuNode";

export const MENU: Menu = new Menu(
  'mock-menu',
  new MenuNode(
    'mock-menu-tree',
    'Menu Tree',
    [
      new MenuNode('home', 'Home', null),
      new MenuNode('contact', 'Contact', null),
      new MenuNode('galleries', 'Galleries', [
          new MenuNode('gallery1', "Gallery 1", null),
          new MenuNode('gallery2', "Gallery 2", null)
        ]
      ),
      new MenuNode('illnesses', 'Illnesses', null)
    ]
  ));
