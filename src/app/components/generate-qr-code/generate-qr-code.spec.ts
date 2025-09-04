import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateQrCode } from './generate-qr-code';

describe('GenerateQrCode', () => {
  let component: GenerateQrCode;
  let fixture: ComponentFixture<GenerateQrCode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateQrCode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateQrCode);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
