import {OverviewPage} from "../pages/overview.po";

export class User {
  public constructor(private overviewPage: OverviewPage) {

  }

  public navigatesToOverview(): void {
    this.overviewPage.navigateTo();
  }

  seesMenu(): void {
    expect(this.overviewPage.getMenu()).toBeDefined();
    expect(this.overviewPage.getHomeText()).toEqual("Home");
    expect(this.overviewPage.getContactText()).toEqual("Contact");
   }
}
