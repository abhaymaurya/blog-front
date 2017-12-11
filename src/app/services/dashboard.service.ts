import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { Subject }    from 'rxjs/Subject';
import { UserService } from './../services/user.service';
import { environment } from '../../environments/environment';

//return type of response
interface GetSectionsResponse {
    sections: string[]
}

@Injectable()
export class DashboardService {
    // Observable string sources
    private sections = new Subject<string[]>();

    // Observable string streams
    sections$ = this.sections.asObservable();
    constructor(private http: HttpClient, private httpService: HttpService, private userService: UserService) { }

    getSections(){
        const data = {};
        this.http.post<GetSectionsResponse>(
            environment.appUrl+'getSections',
            JSON.stringify(data),
            {
                headers: this.httpService.getHeaders()
            }
        )
        .subscribe(
            // Successful responses call the first callback.
            data => {
                this.sections.next(data.sections);
            },
            // Errors will call this callback instead:
            err => {
                if(err.status===401){
                    this.userService.refreshLogin();
                    this.userService.isLoggedIn$.subscribe(
                        isLoggedIn => {
                            if(isLoggedIn){
                                this.getSections();
                            }
                        }
                    );
                }
                console.log(err);
            }
        );
    }
}
