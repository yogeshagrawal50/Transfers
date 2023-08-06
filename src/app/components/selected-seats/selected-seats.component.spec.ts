import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedSeatsComponent } from './selected-seats.component';

describe('SelectedSeatsComponent', () => {
  let component: SelectedSeatsComponent;
  let fixture: ComponentFixture<SelectedSeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedSeatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
