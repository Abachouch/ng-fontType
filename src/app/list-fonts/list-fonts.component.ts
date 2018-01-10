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

    this.savedFonts.push(new Font('Header1' , 'Tahoma' , 400));
    this.savedFonts.push(new Font('Header2' , 'Roboto' , 700));
    this.savedFonts.push(new Font('Header3' , 'Tahoma' , 400));
    this.savedFonts.push(new Font('thinHeader' , 'Lato' , 100));
    this.savedFonts.push(new Font('body' , 'Lato' , 300));

    console.log(this.savedFonts) ;

    // if (localStorage.fonts) {
    //   this.savedFonts = localStorage.saveFonts;
    // }
  }

  ngOnInit() {
  }

}
