import {Component} from '@angular/core';
import { componentFactoryName } from '@angular/compiler';
import { fromStringWithSourceMap } from 'source-list-map';
import {FormsModule} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    user = {
        email: '',
        name: '',
        password: '',
        confirmPassword: ''
    };

    constructor (private auth: AuthService) {

    }

    autofill() {
        this.user.email = this.auth.email;
        this.user.password = this.auth.password;
    }
    signup() {
        console.log(this.user);
    }
}
