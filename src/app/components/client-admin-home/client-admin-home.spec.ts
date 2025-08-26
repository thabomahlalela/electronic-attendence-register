import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAdminHome } from './client-admin-home';

describe('ClientAdminHome', () => {
  let component: ClientAdminHome;
  let fixture: ComponentFixture<ClientAdminHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientAdminHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientAdminHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
