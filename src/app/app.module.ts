import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms' ;

import { AppComponent } from './app.component';
import { ListFontsComponent } from './list-fonts/list-fonts.component';
import { ListFontItemComponent } from './list-font-item/list-font-item.component';
import { FontComponent } from './font/font.component';
import { Router } from '@angular/router/src/router';

@NgModule({
  declarations: [
    AppComponent,
    ListFontsComponent,
    ListFontItemComponent,
    FontComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ListFontsComponent },
      { path: 'font', component: FontComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
