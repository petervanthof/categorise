import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CategoryListComponent} from './category-list/category-list.component';
import {ItemListComponent} from './item-list/item-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
