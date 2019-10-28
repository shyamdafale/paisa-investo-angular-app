import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeDetailsComponent } from './income-details.component';

describe('IncomeDetailsComponent', () => {
  let component: IncomeDetailsComponent;
  let fixture: ComponentFixture<IncomeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
