import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthServiceService } from '../../Services/auth-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {


  router = inject(Router);
  activatedRouter = inject(ActivatedRoute);
  authService = inject(AuthServiceService);
  user : any
  isLoggedIn : boolean = false;
  

  constructor(){
   
  }

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(res =>{
      this.isLoggedIn = this.authService.isLoggedIn();
     });
  }

  myBlogs() {
    this.router.navigate(['/myBlogs'])
   }
    
    
      

  logout() {
    localStorage.removeItem("user_id");
    localStorage.removeItem("access_token");
    localStorage.removeItem("loglevel");
    localStorage.removeItem("payload");
    localStorage.removeItem("userName");
    this.authService.isLoggedIn$.next(false);
    this.router.navigate(['login']);
  }
}
