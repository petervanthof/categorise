import {Component, OnInit, NgModule, ViewChild} from '@angular/core';
import {Category} from '../category.model';
import {ITreeOptions, TreeComponent} from 'angular-tree-component';
import {ContextMenuComponent} from 'ngx-contextmenu';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  @ViewChild(TreeComponent)
  private tree: TreeComponent;

  @ViewChild(ContextMenuComponent)
  public basicMenu: ContextMenuComponent;

  private counter = 0;

  options: ITreeOptions = {
    allowDrag: true,
    allowDrop: true
  };

  categories: Category[];

  selectedCategory: Category;

  constructor() {
    this.categories = [
      this.createCategory('Artist', [
        this.createCategory('VirtualSelf', [], ['Ghost Voices']),
        this.createCategory('Huem', [], ['Your Smile (Original Mix)']),
        this.createCategory('GabrielDresden', [], ['Arcadia', 'Only Road (Cosmic Gate Extended Mix) (feat. Sub Teal)'])], []),
      this.createCategory('Genre', [
        this.createCategory('DragAndDropMe', [], ['Your Smile (Original Mix)']),
        this.createCategory('DanceElectro', [], ['Ghost Voices', 'Arcadia', 'Only Road (Cosmic Gate Extended Mix) (feat. Sub Teal)'])], []),
      this.createCategory('Year', [
        this.createCategory('2018', [], ['Your Smile (Original Mix)', 'Only Road (Cosmic Gate Extended Mix) (feat. Sub Teal)']),
        this.createCategory('RightClickMe', [], ['Arcadia']),
        this.createCategory('2017', [], ['Ghost Voices'])], [])];
  }

  addCategories(categories: HTMLInputElement, item: HTMLInputElement): boolean {
    categories.value.split(' ').forEach(category => this.findOrCreateCategory(category).addItem(item.value));

    this.tree.treeModel.update();

    categories.value = '';
    item.value = '';

    return false;
  }

  private findOrCreateCategory(name: string): Category {
    let category = this.findCategory(name);

    if (!category) {
      category = this.createCategory(name, [], []);

      if (this.selectedCategory) {
        this.selectedCategory.addCategory(category);
      } else {
        this.categories.push(category);
      }
    }

    return category;
  }

  private findCategory(name: string): Category {
    for (let i = 0; i < this.categories.length; i++) {
      const category = this.categories[i].findCategory(name);

      if (category) {
        return category;
      }
    }

    return null;
  }

  private createCategory(name: string, children: Category[], items: string[]): Category {
    return new Category(this.counter++, name, children, items);
  }

  setSelectedCategory(event): boolean {
    this.selectedCategory = event.node.data;

    return false;
  }

  deleteCategory(event) {
    for (let i = 0; i < this.categories.length; i++) {
      const category = this.categories[i];

      if (category === event.item) {
        this.categories.splice(i, 1);
        this.tree.treeModel.update();
        this.selectedCategory = null;

        return;
      } else if (category.removeCategory(event.item)) {
        this.tree.treeModel.update();
        this.selectedCategory = null;

        return;
      }
    }
  }

}
