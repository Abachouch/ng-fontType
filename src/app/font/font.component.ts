import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Font } from '../models/Font';
import 'rxjs/add/operator/switchMap';
import { debug } from 'util';

@Component({
  selector: 'app-font',
  templateUrl: './font.component.html',
  styleUrls: ['./font.component.css']
})
export class FontComponent implements OnInit {

  font: Font = new Font('untitled');
  instaledFonts = ['Roboto', 'open Sans', 'tahoma', 'verdana', 'shill'];
  weights = [{ v: '100', t: 'thin' }, { v: '400', t: 'normal' }, { v: '500', t: 'meduim' }, { v: '700', t: 'blod' }];
  previewType: string;
  previewStyle;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {

    const title = this.route.snapshot.paramMap.get('title');
    if (title) {
      // set title
      this.font.title = title;
      // construct object
      this.font.constructFromDatabase();
      console.log(title);
    }else {
      this.font.fontFamily = 'tahoma';
      this.font.fontSize = 16;
      this.font.fontWeight = 400;
      this.font.lineHeight = 1;
      this.font.letterSpacing = 1;
      this.previewType = 'latin';
    }

  }

  save() {
    this.font.saveToDatabase();
  }
  ngOnInit() {


  }

}
