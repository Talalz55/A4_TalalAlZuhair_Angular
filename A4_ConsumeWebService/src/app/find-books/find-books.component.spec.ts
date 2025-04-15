import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBooksComponent } from './find-books.component';

describe('FindBooksComponent', () => {
  let component: FindBooksComponent;
  let fixture: ComponentFixture<FindBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindBooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
