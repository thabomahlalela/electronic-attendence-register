import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRegistrationForm } from './company-registration-form';

describe('CompanyRegistrationForm', () => {
  let component: CompanyRegistrationForm;
  let fixture: ComponentFixture<CompanyRegistrationForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyRegistrationForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyRegistrationForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
