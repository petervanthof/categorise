import {Category} from '../category.model';
import {Injectable} from '@angular/core';

@Injectable()
export class CategoryService {

  private categories: Category[];

  private selectedCategory: Category;

  private categoryId: number;

  constructor() {
    this.categoryId = 0;
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

  getCategories(): Category[] {
    return this.categories;
  }

  getSelectedCategory(): Category {
    return this.selectedCategory;
  }

  setSelectedCategory(category: Category): void {
    this.selectedCategory = category;
  }

  findOrCreateCategory(name: string): Category {
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
    return new Category(this.categoryId++, name, children, items);
  }

  deleteCategory(category: Category) {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i] === category) {
        this.categories.splice(i, 1);
        this.selectedCategory = null;

        return;
      } else if (this.categories[i].removeCategory(category)) {
        this.selectedCategory = null;

        return;
      }
    }
  }

}
