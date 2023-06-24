import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;

constructor (private router: Router) {}

  login() {
    this.isLoggedIn = true;
    this.router.navigate(['/crud']);
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/']);  
  }


  ngOnInit(): void {
  }
}