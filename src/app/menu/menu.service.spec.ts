import {MenuService} from './menu.service';
import {Menu} from "./Menu";

describe('MenuService', () => {
  let service: MenuService;
  beforeEach(() => {
    service = new MenuService();
  });

  it('should return the menu', () => {
    const menu:Menu = service.getMenu();
    const numberOfFirstLevelMenuItems = menu.getNumberOfFirstLevelMenuItems();
    expect(menu.getNumberOfFirstLevelMenuItems()).toBe(4)
    expect(menu.getTitlesOfFirstLevelMenuItems()).toEqual([
      'Home', 'Contact', 'Galleries', 'Illnesses'
    ]);
  });
});
