import {Category} from '../category.model';
import {CategoryService} from '../service/category.service';
import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {

  constructor(public categoryService: CategoryService) {}

  deleteItem(item: HTMLInputElement): boolean {
    this.categoryService.getSelectedCategory().removeItem(item.value);

    item.value = '';

    return false;
  }

}
