import {Category} from '../category.model';
import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {

  @Input()
  category: Category;

  constructor() {}

  deleteItem(item: HTMLInputElement): boolean {
    this.category.removeItem(item.value);

    item.value = '';

    return false;
  }

}
