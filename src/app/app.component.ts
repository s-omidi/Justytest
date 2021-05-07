import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AuthenticationService } from './core/services/authentication.service';
import { LoginOrRegisterModalComponent } from './modules/account/components/login-or-register-modal/login-or-register-modal.component';
import { IUser } from './modules/account/models/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'justytest';
  user: IUser;
  subManager = new Subscription();
  /**
   *
   */
  constructor(public dialog: MatDialog, public authenticationService: AuthenticationService) { }
  ngOnInit(): void {
    this.authenticationService.user.subscribe(u => this.user = u);
    console.log(this.user);
  }

  login() {
    const dialogRef = this.dialog.open(LoginOrRegisterModalComponent);
    this.subManager.add(
      dialogRef.afterClosed().subscribe((res) => {

      })
    );
  }

  logout(){
    this.authenticationService.logout();
  }
}
