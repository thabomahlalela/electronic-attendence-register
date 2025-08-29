import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureSurvey } from './capture-survey';

describe('CaptureSurvey', () => {
  let component: CaptureSurvey;
  let fixture: ComponentFixture<CaptureSurvey>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaptureSurvey]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptureSurvey);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
