import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFontItemComponent } from './list-font-item.component';

describe('ListFontItemComponent', () => {
  let component: ListFontItemComponent;
  let fixture: ComponentFixture<ListFontItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFontItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFontItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
