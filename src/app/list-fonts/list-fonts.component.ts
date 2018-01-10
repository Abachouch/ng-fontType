import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-fonts',
  templateUrl: './list-fonts.component.html',
  styleUrls: ['./list-fonts.component.css']
})
export class ListFontsComponent implements OnInit {

  savedFonts = new Array();
  constructor() {
    if (localStorage.fonts) {
      this.savedFonts = localStorage.saveFonts;
    }
  }

  ngOnInit() {
  }

}
