import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.page.html',
  styleUrls: ['./secure.page.scss'],
  standalone: false,
 
})
export class SecurePage implements OnInit {

  token: string | null = null;

  constructor(private authService : AuthService,private router : Router) { }

  ngOnInit() {
    this.token = this.authService.getToken();

  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
