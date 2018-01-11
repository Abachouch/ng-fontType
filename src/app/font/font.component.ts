import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Font } from '../models/Font';

@Component({
  selector: 'app-font',
  templateUrl: './font.component.html',
  styleUrls: ['./font.component.css']
})
export class FontComponent implements OnInit {

  font: Font = new Font('untitled');

  instaledFonts = ['Roboto', 'open Sans', 'tahoma', 'verdana', 'shill'];
  weights = [{ v: '100', t: 'thin' }, { v: '400', t: 'normal' }, { v: '500', t: 'meduim'}, { v: '700', t: 'blod' } ];
textPreview: string;
previewStyle;
constructor() {
}

ngOnInit() {
}

}
