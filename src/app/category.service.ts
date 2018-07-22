import {Category} from './category.model';
import {Injectable} from '@angular/core';
import {Observable, Subject, BehaviorSubject} from 'rxjs';

@Injectable()
export class CategoryService {

  selectedCategory: BehaviorSubject<Category>;

  private root: Category;

  private categoryId: number;

  constructor() {
    this.selectedCategory = new BehaviorSubject<Category>(null);
    this.categoryId = 0;
    this.root = this.createCategory('root', [
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
        this.createCategory('2017', [], ['Ghost Voices'])], [])], []);
  }

  getCategories(): Observable<Category[]> {
    return Observable.of(this.root.children);
  }

  setSelectedCategory(category: Category): void {
    this.selectedCategory.next(category);
  }

  findOrCreateCategory(name: string): Category {
    let category = this.root.findCategory(name);

    if (!category) {
      category = this.createCategory(name, [], []);

      if (this.selectedCategory.getValue()) {
        this.selectedCategory.getValue().addCategory(category);
      } else {
        this.root.addCategory(category);
      }
    }

    return category;
  }

  private createCategory(name: string, children: Category[], items: string[]): Category {
    return new Category(this.categoryId++, name, children, items);
  }

  deleteCategory(category: Category) {
    this.root.deleteCategory(category);
  }

}
