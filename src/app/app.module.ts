import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CategoryListComponent} from './category-list/category-list.component';
import {ItemListComponent} from './item-list/item-list.component';
import {TreeModule} from 'angular-tree-component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
