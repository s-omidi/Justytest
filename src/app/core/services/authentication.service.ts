import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { IUser } from '../../modules/account/models/user.model';
import { IServiceRequest } from '../models/service-request.model';

@Injectable({ providedIn: 'root' })

export class AuthenticationService {
    private userSubject: BehaviorSubject<IUser>;
    private refreshTokenTimeout;
    public user: Observable<IUser>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('currentUser')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): IUser {
        return this.userSubject.value;
    }

    login(user: IUser) {
        return this.http.post<IServiceRequest<IUser>>(`${environment.apiUrl}/api/account/authenticate`, user)
            .pipe(map(res => {
                if (res?.succeeded && res?.data) {
                    this.userSubject.next(res.data);
                    localStorage.setItem('currentUser', JSON.stringify(res.data));
                    localStorage.setItem('access_token', res.data.jwToken);
                    localStorage.setItem('refresh_Token', res.data.refreshToken);
                    this.startRefreshTokenTimer();
                }
                return res;
            }));
    }

    logout() {
        this.userSubject.next(null);
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_Token');
        localStorage.removeItem('currentUser');
        this.router.navigate(['/']);
    }

    refreshToken() { }

    private startRefreshTokenTimer() {
        const jwtToken = JSON.parse(atob(this.userValue.jwToken.split('.')[1]));
        const expires = new Date(jwtToken.exp * 1000);
        const timeout = expires.getTime() - Date.now() - (60 * 1000);
        this.refreshTokenTimeout = setTimeout(() => this.logout(), timeout);
    }


}