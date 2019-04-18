import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const loginurl = "http://localhost:3000/login";
const signupurl = "http://localhost:3000/signup";

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {
    }
    password;
    email = localStorage.getItem('email');
    username = localStorage.getItem('username');
    isUserLoggedIn = localStorage.getItem('isUserLoggedIn');

    login(data) {
        return this.http.post(loginurl, data);
    }

    signup(data) {
        return this.http.post(signupurl, data);
    }
}
