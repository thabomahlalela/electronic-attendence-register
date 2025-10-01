import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySurveys } from './company-surveys';

describe('CompanySurveys', () => {
  let component: CompanySurveys;
  let fixture: ComponentFixture<CompanySurveys>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanySurveys]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanySurveys);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
