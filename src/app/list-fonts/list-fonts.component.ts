import { Component, OnInit } from '@angular/core';
import { Font } from '../models/Font';

@Component({
  selector: 'app-list-fonts',
  templateUrl: './list-fonts.component.html',
  styleUrls: ['./list-fonts.component.css']
})
export class ListFontsComponent implements OnInit {

  savedFonts = new Array();
  constructor() {

    this.savedFonts = this.getAllFonts();

    console.log(this.savedFonts);

    // this.savedFonts.push(new Font('Header1', 'Tahoma', 400, 20, '#f2ade3', '#2f2aaa', 1, 1));
    // this.savedFonts.push(new Font('Header2', 'Open Sans', 400, 20, '#f2ade3', '#2f2aaa', 1, 1));
    // this.savedFonts.push(new Font('Header3', 'Roboto', 400, 20, '#f2ade3', '#2f2aaa', 1, 1));
    // this.savedFonts.push(new Font('Header4', 'Tahoma', 400, 20, '#f2ade3', '#2f2aaa', 1, 1));

    // for (const f of this.savedFonts) {
    //   localStorage.setItem('_' + f.title, JSON.stringify(f));
    // }


    // if (localStorage.fonts) {
    //   this.savedFonts = localStorage.saveFonts;
    // }
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

  ngOnInit() {
  }

}
