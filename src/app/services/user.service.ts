import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { Subject }    from 'rxjs/Subject';
import { environment } from '../../environments/environment';

//return type of response
interface LoginResponse {
    accessToken: string,
    refreshToken: string,
    user: object
}

interface RefreshLoginResponse {
    accessToken: string,
    refreshToken: string
}

@Injectable()
export class UserService {
    // Observable string sources
    private isLoggedIn = new Subject<boolean>();

    // Observable string streams
    isLoggedIn$ = this.isLoggedIn.asObservable();

    constructor(private http:HttpClient, private httpService: HttpService) { }

    login(email, password){
        const data = {
            email:email,
            password:password
        };
        this.http.post<LoginResponse>(
            environment.appUrl+'login',
            JSON.stringify(data),
            {
                headers: this.httpService.getHeaders()
            }
        )
        .subscribe(
            // Successful responses call the first callback.
            data => {
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('refreshToken', data.refreshToken);
                localStorage.setItem('user', JSON.stringify(data.user));
                this.isLoggedIn.next(true);
            },
            // Errors will call this callback instead:
            err => {
                console.log(err)
            }
        );
    }

    refreshLogin(){
        //logging out the user
        this.isLoggedIn.next(false);
        //trying refresh token
        const refreshToken = true;
        this.http.post<RefreshLoginResponse>(
            environment.appUrl+'refreshLogin',
            {},
            {
                headers: this.httpService.getHeaders(refreshToken)
            }
        )
        .subscribe(
            // Successful responses call the first callback.
            data => {
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('refreshToken', data.refreshToken);
                this.isLoggedIn.next(true);
            },
            // Errors will call this callback instead:
            err => {
                console.log(err)
            }
        );
    }
}