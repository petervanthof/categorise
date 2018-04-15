import {Component, OnInit} from '@angular/core';
import {Category} from '../category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  categories: Category[];

  selectedCategory: Category;

  constructor() {
    this.categories = [
      new Category('StateOfTrance', [
        'https://www.1001tracklists.com/track/2740pn55/safri-duo-played-a-live-nwyr-willem-de-roo-remix/index.html',
        'https://www.beatport.com/release/sunny-days-club-mix/2052374',
        'https://www.1001tracklists.com/track/2upj62w5/alpha-9-higher-place/index.html']),
      new Category('GroupTherapy', [
        'https://www.1001tracklists.com/track/1qd4y1xx/virtual-self-ghost-voices/index.html',
        'https://www.1001tracklists.com/track/19c5b9pp/gabriel-dresden-only-road-cosmic-gate-remix/index.html',
        'https://www.1001tracklists.com/track/16kvgbt5/above-beyond-northern-soul-nwyr-remix/index.html']),
      new Category('Fanfare', [
        'https://www.1001tracklists.com/track/1p163up/coldplay-one-republic-otto-knows-fix-you-vs.-apologize-vs.-million-voices-thomas-gold-bootleg/index.html',
        'https://www.1001tracklists.com/track/2gkcp0wx/marcus-schossow-new_id-ada-first-day-extended-remix/index.html',
        'https://www.1001tracklists.com/track/1hrpklrp/deniz-koyu-thomas-gold-never-alone/index.html'])];
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
