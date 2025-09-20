import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMeetings } from './company-meetings';

describe('CompanyMeetings', () => {
  let component: CompanyMeetings;
  let fixture: ComponentFixture<CompanyMeetings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyMeetings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyMeetings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
