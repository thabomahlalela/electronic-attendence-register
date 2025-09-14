import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreAboutSurvey } from './more-about-survey';

describe('MoreAboutSurvey', () => {
  let component: MoreAboutSurvey;
  let fixture: ComponentFixture<MoreAboutSurvey>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreAboutSurvey]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreAboutSurvey);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
