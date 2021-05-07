import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/shared-material.modules';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';
import { LoginOrRegisterModalComponent } from './components/login-or-register-modal/login-or-register-modal.component';
import { DialogComponent } from './components/dialog/dialog.component';



@NgModule({
  declarations: [LoginModalComponent, RegisterModalComponent, LoginOrRegisterModalComponent, DialogComponent],
  imports: [
    CommonModule,
    MaterialModule

  ]
})
export class AccountModule { }
