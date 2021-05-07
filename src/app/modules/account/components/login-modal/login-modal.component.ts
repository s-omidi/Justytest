import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  user = {} as IUser;
  error = '';
  constructor(private fb: FormBuilder, private router: Router, private authenticationService: AuthenticationService, private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.addControls();
  }

  addControls() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  get f() { return this.loginForm.controls; }

  logIn() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const formData = this.loginForm.value;
    this.user = Object.assign(this.user, formData);
    this.loading = true;
    this.execute();
  }

  execute() {
    this.authenticationService.login(this.user)
      .pipe(first())
      .subscribe({
        next: () => {
          this.dialogRef.closeAll();
        },
        error: error => {
          this.error = error;
          this.loading = false;
        }
      });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  };

}
