import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContaComponent } from './card-conta.component';

describe('CardContaComponent', () => {
  let component: CardContaComponent;
  let fixture: ComponentFixture<CardContaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardContaComponent]
    });
    fixture = TestBed.createComponent(CardContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
