import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { RegisterModalComponent } from '../register-modal/register-modal.component';

@Component({
  selector: 'app-login-or-register-modal',
  templateUrl: './login-or-register-modal.component.html',
  styleUrls: ['./login-or-register-modal.component.scss']
})
export class LoginOrRegisterModalComponent implements OnInit {
  subManager = new Subscription();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  signUp() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(RegisterModalComponent);
    this.subManager.add(
      dialogRef.afterClosed().subscribe((res) => {

      })
    );
  }

  logIn() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(LoginModalComponent);
    this.subManager.add(
      dialogRef.afterClosed().subscribe((res) => {

      })
    );
  }
}
