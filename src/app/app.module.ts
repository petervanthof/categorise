import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LabelListComponent } from './label-list/label-list.component';
import { LabelItemComponent } from './label-item/label-item.component';
import { LabelLinksComponent } from './label-links/label-links.component';


@NgModule({
  declarations: [
    AppComponent,
    LabelListComponent,
    LabelItemComponent,
    LabelLinksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
