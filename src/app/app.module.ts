import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListFontsComponent } from './list-fonts/list-fonts.component';
import { ListFontItemComponent } from './list-font-item/list-font-item.component';
import {ColorPickerComponent} from './color-picker/color-picker.component' ;
import { FontComponent } from './font/font.component';

import { Router } from '@angular/router/src/router';

import {ColorsService} from './colors.service' ;


@NgModule({
  declarations: [
    AppComponent,
    ListFontsComponent,
    ListFontItemComponent,
    FontComponent,
    ColorPickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ListFontsComponent },
      { path: 'font/:title', component: FontComponent },
      { path: 'font', component: FontComponent }
    ])
  ],
  providers: [
    ColorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }