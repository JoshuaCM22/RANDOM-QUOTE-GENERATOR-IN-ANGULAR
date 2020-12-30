import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteAndAuthorComponent } from './quote-and-author.component';

describe('QuoteAndAuthorComponent', () => {
  let component: QuoteAndAuthorComponent;
  let fixture: ComponentFixture<QuoteAndAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteAndAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteAndAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
