export class MenuNode {
  public constructor(private id: string, private title: string, private menuNodes: MenuNode[]) {

  }

  getMenuNodes(): MenuNode[] {
    return this.menuNodes;
  }

  getTitle(): string {
    return this.title;
  }

  getId(): string {
    return this.id;
  }
}
