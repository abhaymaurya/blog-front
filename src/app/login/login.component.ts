import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./../sign-up/sign-up.component.css']
})
export class LoginComponent implements OnInit {
    email:string;
    password:string;
    constructor(private userService: UserService, private router: Router) { }

    ngOnInit() {
    }

    login():void{
        this.userService.login(this.email, this.password);
        this.userService.isLoggedIn$.subscribe(
            isLoggedIn => {
                if(isLoggedIn){
                    this.router.navigate(['/dashboard']);
                }
            }
        );
    }
}