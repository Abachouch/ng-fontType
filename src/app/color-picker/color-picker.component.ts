import { Component, OnInit, Input } from '@angular/core';
import { ColorsService } from '../colors.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html'
})
export class ColorPickerComponent implements OnInit {
  @Input() color;
  isOpen = false;
  colors: string[];

  constructor(cs: ColorsService) {
    console.log('cs.getallitem()');
    console.log(cs.getAllHtml);

    this.colors = cs.getAllHtml();
    console.log('colors : ');
    console.log(this.colors);


  }

  ngOnInit() {
  }

}
