import {MenuNode} from "./MenuNode";


export class Menu {
  public constructor(private id: string, private headNode: MenuNode) {

  }

  public getId(): string {
    return this.id;
  }

  public getIdOfHeadNode():string{
    return this.headNode.getId();
  }

  public getTitleOfHeadNode():string{
    return this.headNode.getTitle();
  }

  public getNumberOfFirstLevelMenuItems(): number {
    return this.getHeadNode()
      .getMenuNodes()
      .length;
  }

  public getTitlesOfFirstLevelMenuItems(): string[] {
    return this.getHeadNode()
      .getMenuNodes()
      .map((menuNode => menuNode.getTitle()));
  }

  private getHeadNode(): MenuNode {
    return this.headNode;
  }


}

