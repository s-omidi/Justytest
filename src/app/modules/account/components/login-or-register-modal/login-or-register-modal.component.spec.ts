import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOrRegisterModalComponent } from './login-or-register-modal.component';

describe('LoginOrRegisterModalComponent', () => {
  let component: LoginOrRegisterModalComponent;
  let fixture: ComponentFixture<LoginOrRegisterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginOrRegisterModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginOrRegisterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
