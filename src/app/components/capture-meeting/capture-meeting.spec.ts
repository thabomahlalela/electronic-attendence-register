import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureMeeting } from './capture-meeting';

describe('CaptureMeeting', () => {
  let component: CaptureMeeting;
  let fixture: ComponentFixture<CaptureMeeting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaptureMeeting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptureMeeting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
