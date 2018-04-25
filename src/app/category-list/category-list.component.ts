import {Component, OnInit, NgModule, ViewChild} from '@angular/core';
import {Category} from '../category.model';
import {ITreeOptions, TreeComponent} from 'angular-tree-component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  @ViewChild(TreeComponent)
  private tree: TreeComponent;

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
        this.createCategory('Virtual Self', [], ['Ghost Voices']),
        this.createCategory('Huem', [], ['Your Smile (Original Mix)']),
        this.createCategory('Gabriel & Dresden', [], ['Arcadia', 'Only Road (Cosmic Gate Extended Mix) (feat. Sub Teal)'])], []),
      this.createCategory('Genre', [
        this.createCategory('Trance', [], ['Your Smile (Original Mix)']),
        this.createCategory('Dance/Electro', [], ['Ghost Voices', 'Arcadia', 'Only Road (Cosmic Gate Extended Mix) (feat. Sub Teal)'])], []),
      this.createCategory('Year', [
        this.createCategory('2018', [], ['Your Smile (Original Mix)', 'Only Road (Cosmic Gate Extended Mix) (feat. Sub Teal)']),
        this.createCategory('2005', [], ['Arcadia']),
        this.createCategory('2017', [], ['Ghost Voices'])], [])];
  }

  private createCategory(name: string, children: Category[], items: string[]): Category {
    return new Category(this.counter++, name, children, items);
  }

  addCategory(category: HTMLInputElement, item: HTMLInputElement): boolean {
    this.categories.push(new Category(this.counter++, category.value, [], [item.value]));
    this.tree.treeModel.update();

    category.value = '';
    item.value = '';

    return false;
  }

  setSelectedCategory(event): boolean {
    this.selectedCategory = event.node.data;

    return false;
  }

}
