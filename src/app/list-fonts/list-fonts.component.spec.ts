import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFontsComponent } from './list-fonts.component';

describe('ListFontsComponent', () => {
  let component: ListFontsComponent;
  let fixture: ComponentFixture<ListFontsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFontsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFontsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
