import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSurveys } from './view-surveys';

describe('ViewSurveys', () => {
  let component: ViewSurveys;
  let fixture: ComponentFixture<ViewSurveys>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSurveys]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSurveys);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
