import { Component, OnInit } from '@angular/core';
import { Font } from '../models/Font';
import { ClassMethod } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-list-fonts',
  templateUrl: './list-fonts.component.html',
  styleUrls: ['./list-fonts.component.css']
})
export class ListFontsComponent implements OnInit {

  savedFonts: Font[] = new Array();
  cssModal = true;
  css = '';
  constructor() {

    this.savedFonts = this.getAllFonts();

  }

  getAllFonts = function () {
    const prefix = '_';
    const all: Font[] = new Array();
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).startsWith(prefix)) {
        all.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
    return all;
  };

  getCss() {
    if (this.cssModal) {
      this.cssModal = false;
    } else {
      this.cssModal = true;
      console.log('this.saved fonts ' + this.savedFonts);
      console.log('this.css' + this.css);
      let f: Font;
      this.css = '';
      this.savedFonts.map(k => {
        f = new Font(k.title) ;
        this.css += f.getCssFormat();
      });
      console.log('this.css2' + this.css);
    }
  }

  ngOnInit() {
  }

}
