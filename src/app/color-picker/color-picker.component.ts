import { Component, OnInit, Input , Output , EventEmitter} from '@angular/core';
import { ColorsService } from '../colors.service';


@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html'
})
export class ColorPickerComponent implements OnInit {
  @Input() color;
  @Output('close')
  close: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output('chooseColor')
  chooseColor: EventEmitter<string> = new EventEmitter<string>();
  colors: string[];

  constructor(cs: ColorsService) {
    console.log('cs.getallitem()');
    console.log(cs.getAllHtml);

    this.colors = cs.getAllHtml();
    console.log('colors : ');
    console.log(this.colors);


  }

  onChooseColor(color) {
    this.color = color ;
    console.log(color);
    this.chooseColor.emit(this.color);
  }

  onhideColorPicker() {
    this.close.emit(false) ;
  }

  ngOnInit() {
  }

}
