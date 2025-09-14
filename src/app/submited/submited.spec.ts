import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Submited } from './submited';

describe('Submited', () => {
  let component: Submited;
  let fixture: ComponentFixture<Submited>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Submited]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Submited);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
