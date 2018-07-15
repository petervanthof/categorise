export class Category {

  constructor(public id: number, public name: String, public children: Category[], public items: string[]) {
  }

  addItem(item: string) {
    if (item) {
      this.items.push(item);
    }
  }

  findCategory(name: string): Category {
    if (this.name === name) {
      return this;
    }

    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      const category = child.findCategory(name);

      if (category) {
        return category;
      }
    }

    return null;
  }

}
