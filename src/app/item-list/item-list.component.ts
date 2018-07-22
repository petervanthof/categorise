import {Category} from '../category.model';
import {CategoryService} from '../category.service';
import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  category: Category;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.selectedCategory.subscribe(c => this.category = c);
  }

  deleteItem(item: HTMLInputElement): boolean {
    this.category.removeItem(item.value);

    item.value = '';

    return false;
  }

}
