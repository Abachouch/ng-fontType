import { Component, OnInit, Input } from '@angular/core';
import { ColorsService } from '../colors.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  @Input() color;
  isOpen = false;
  constructor(color: ColorsService) {
    console.log(color.getHtmlColors());
  }

  ngOnInit() {
  }

}
