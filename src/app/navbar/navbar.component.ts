import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username;
  isUserLoggedIn;

  constructor(private authservice : AuthService) { }

  ngDoCheck() {
    this.isUserLoggedIn = this.authservice.isUserLoggedIn;
    this.username = this.authservice.username;
  }

  logout() {
    localStorage.clear();
    this.authservice.username = null;
    this.authservice.isUserLoggedIn = null;
    this.authservice.email = null;
  }

  ngOnInit() {
  }

}
