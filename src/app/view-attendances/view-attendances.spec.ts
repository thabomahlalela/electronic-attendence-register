import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAttendances } from './view-attendances';

describe('ViewAttendances', () => {
  let component: ViewAttendances;
  let fixture: ComponentFixture<ViewAttendances>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAttendances]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAttendances);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
