export class Category {

  id: number;
  name: String;
  children: Category[];
  items: string[];

  deserialize(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.items = data.items;

    this.children = [];

    data.children.forEach(child => this.children.push(new Category().deserialize(child)));

    return this;
  }

  addItem(item: string) {
    if (item) {
      this.items.push(item);
    }
  }

  removeItem(item: string) {
    const index = this.items.indexOf(item);

    this.items.splice(index, 1);
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

  addCategory(category: Category) {
    this.children.push(category);
  }

  deleteCategory(category: Category): boolean {
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];

      if (child === category) {
        this.children.splice(i, 1);

        return true;
      } else if (child.deleteCategory(category)) {
        return true;
      }
    }

    return false;
  }

}
