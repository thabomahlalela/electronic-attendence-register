import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreAboutMeeting } from './more-about-meeting';

describe('MoreAboutMeeting', () => {
  let component: MoreAboutMeeting;
  let fixture: ComponentFixture<MoreAboutMeeting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreAboutMeeting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreAboutMeeting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
