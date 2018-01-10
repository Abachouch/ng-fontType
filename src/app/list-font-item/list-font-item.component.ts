import { Component, OnInit, Input } from '@angular/core';
import { Font } from '../models/Font';
import { Title } from '@angular/platform-browser/src/browser/title';

@Component({
  selector: 'app-list-font-item',
  templateUrl: './list-font-item.component.html',
  styleUrls: ['./list-font-item.component.css']
})
export class ListFontItemComponent implements OnInit {
  @Input('font') font: Font;
  constructor() {
  }

  ngOnInit() {
  }

}
