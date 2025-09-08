import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAdmin } from './custom-admin';

describe('CustomAdmin', () => {
  let component: CustomAdmin;
  let fixture: ComponentFixture<CustomAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
