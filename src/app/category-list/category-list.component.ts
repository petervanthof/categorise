import {Component, OnInit, NgModule} from '@angular/core';
import {Category} from '../category.model';
import {ITreeOptions} from 'angular-tree-component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  categories: Category[];

  selectedCategory: Category;

  options: ITreeOptions = {
    allowDrag: true,
    allowDrop: true
  };

  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        {id: 2, name: 'child1'},
        {id: 3, name: 'child2'}
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        {id: 5, name: 'child2.1'},
        {
          id: 6,
          name: 'child2.2',
          children: [
            {id: 7, name: 'subsub'}
          ]
        }
      ]
    }
  ];

  constructor() {
    this.categories = [
      new Category('Virtual Self', [
        'Ghost Voices']),
      new Category('Huem', [
        'Your Smile (Original Mix)']),
      new Category('Trance', [
        'Your Smile (Original Mix)']),
      new Category('2018', [
        'Your Smile (Original Mix)',
        'Only Road (Cosmic Gate Extended Mix) (feat. Sub Teal)']),
      new Category('Gabriel & Dresden', [
        'Arcadia',
        'Only Road (Cosmic Gate Extended Mix) (feat. Sub Teal)']),
      new Category('Dance/Electro', [
        'Ghost Voices',
        'Arcadia',
        'Only Road (Cosmic Gate Extended Mix) (feat. Sub Teal)']),
      new Category('2005', [
        'Arcadia']),
      new Category('2017', [
        'Ghost Voices'])];
  }

  addCategory(category: HTMLInputElement, item: HTMLInputElement): boolean {
    this.categories.push(new Category(category.value, [item.value]));

    category.value = '';
    item.value = '';

    return false;
  }

  setSelectedCategory(category: Category): boolean {
    this.selectedCategory = category;

    return false;
  }

}
