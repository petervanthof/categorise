import {Category} from './category.model';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import {Observable, Subject, BehaviorSubject} from 'rxjs';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CategoryService {

  selectedCategory: BehaviorSubject<Category>;

  private categoryUrl: string;

  private root: Category;

  private categoryId: number;

  constructor(private httpClient: HttpClient) {
    this.selectedCategory = new BehaviorSubject<Category>(null);
    this.categoryUrl = 'http://localhost:8080/category';
    this.categoryId = 100;
  }

  getCategory(): Observable<Category> {
    return this.httpClient.get<Category>(this.categoryUrl).map((data: any) => this.root = new Category().deserialize(data));
  }

  save() {
    this.httpClient.post<Category>(this.categoryUrl, this.root, httpOptions).subscribe();
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
    const category = new Category();

    category.id = this.categoryId++;
    category.name = name;
    category.children = children;
    category.items = items;

    return category;
  }

  deleteCategory(category: Category) {
    this.root.deleteCategory(category);
  }

}
