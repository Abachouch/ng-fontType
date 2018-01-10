import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListFontsComponent } from './list-fonts/list-fonts.component';
import { ListFontItemComponent } from './list-font-item/list-font-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListFontsComponent,
    ListFontItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
