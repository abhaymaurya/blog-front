import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteCategoryComponent } from './write-category.component';

describe('WriteCategoryComponent', () => {
  let component: WriteCategoryComponent;
  let fixture: ComponentFixture<WriteCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
