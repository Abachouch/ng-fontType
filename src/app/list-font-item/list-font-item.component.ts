import { Component, OnInit, Input , Output , EventEmitter} from '@angular/core';
import { Font } from '../models/Font';
import { Title } from '@angular/platform-browser/src/browser/title';


@Component({
  selector: 'app-list-font-item',
  templateUrl: './list-font-item.component.html',
  styleUrls: ['./list-font-item.component.css']
})
export class ListFontItemComponent implements OnInit {
  @Input('font') font: Font;
  @Output('deleted') deleted: EventEmitter<boolean> = new EventEmitter<boolean>() ;
  constructor() {
  }

  ngOnInit() {
  }

  delete() {
    const f = new Font(this.font.title);
    f.delete() ;
    this.deleted.emit(true) ;
  }
}
