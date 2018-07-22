import {Component, OnInit, NgModule, ViewChild} from '@angular/core';
import {Category} from '../category.model';
import {CategoryService} from '../service/category.service';
import {ITreeOptions, TreeComponent} from 'angular-tree-component';
import {ContextMenuComponent} from 'ngx-contextmenu';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
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

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
  }

  addCategories(categoriesString: HTMLInputElement, itemString: HTMLInputElement): boolean {
    categoriesString.value.split(' ').forEach(category => this.categoryService.findOrCreateCategory(category).addItem(itemString.value));

    this.tree.treeModel.update();

    categoriesString.value = '';
    itemString.value = '';

    return false;
  }

  setSelectedCategory(event): boolean {
    this.categoryService.setSelectedCategory(event.node.data);

    return false;
  }

  deleteCategory(event) {
    this.categoryService.deleteCategory(event.item);
    this.tree.treeModel.update();
  }

}
