import {Component} from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
const apiurl = 'http://localhost:3000/login';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    constructor(private auth: AuthService, private http: HttpClient, private router: Router) {

    }

    email = 'test user';
    password;

    login() {
        console.log("value of the email is:", this.email);
        this.auth.email = this.email;
        this.auth.password = this.password;
        const body = {
            email: this.email,
            password: this.password,
        };

        this.auth.login(body).subscribe((response) => {
            if (response["message"]) {
                console.log("login successful");
                localStorage.setItem('email', response["user"]["email"]);
                localStorage.setItem('username', response["user"]["name"]);
                localStorage.setItem('isUserLoggedIn', "true");

                this.auth.email = response["user"]["email"];
                this.auth.username = response["user"]["name"];
                this.auth.isUserLoggedIn = response["user"]["email"];

                this.router.navigate(['/']);
            }
            else {
                console.log("login failed");
            }
        },
        (error) => {
            console.log("internal server error");
        }
        );

    }
}
