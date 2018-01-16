import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Font } from '../models/Font';


@Component({
  selector: 'app-font',
  templateUrl: './font.component.html',
  styleUrls: ['./font.component.css']
})
export class FontComponent implements OnInit {

  font: Font = new Font('untitled');
  instaledFonts = ['Roboto', 'open Sans', 'tahoma', 'verdana', 'shill'];
  weights = [{ v: '100', t: 'thin' }, { v: '400', t: 'normal' }, { v: '500', t: 'meduim' }, { v: '700', t: 'blod' }];
  previewType = 0;
  colorPicker = false;
  previewText: string[] = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    `تسبب الثانية بـ ذات. عليها اعلان وكسبت جُل و, مئات فكان العالمية جُل مع. وتم عل هناك وعُرفت,
    `,
    ` 123 456 789 á	bé	cé	dé	é	ef	gé	há	ꟾ	ká	el	em	en	ó	pé	qv́	er	es	té	v́	ix`];
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
    } else {
      this.font.fontFamily = 'tahoma';
      this.font.fontSize = 16;
      this.font.fontWeight = 400;
      this.font.lineHeight = 1;
      this.font.letterSpacing = 1;
    }


  }

  onColorChoosed(e) {
    this.font.color = e;
    this.colorPicker = false;
  }
  hideColorPicker(e) {
    this.colorPicker = e;
  }
  showColorPicker() {
    this.colorPicker = !this.colorPicker;
  }


  save() {
    this.font.saveToDatabase();
  }
  ngOnInit() {


  }

}
