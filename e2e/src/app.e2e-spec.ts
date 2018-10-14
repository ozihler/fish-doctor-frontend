import {User} from "./pageactors/User";
import {OverviewPage} from "./pages/overview.po";

describe('workspace-project App', () => {
   let user: User;


  beforeEach(() => {
    user = new User(new OverviewPage());
  });

  it('should display a menu', () => {
    user.navigatesToOverview();
    user.seesMenu();
  });
});
