import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthServiceService } from '../../Services/auth-service.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { error } from 'console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent implements OnInit{
  
  fb = inject(FormBuilder);
  authService = inject(AuthServiceService);
  router = inject(Router);
  loginForm !: FormGroup;
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email : ['', Validators.compose([Validators.required, Validators.email])],
      password : ['', Validators.required],
     });

    }
  
  login(){
    this.authService.loginService(this.loginForm.value).subscribe({
      next : (res) =>{
        alert(res.message);
        localStorage.setItem("access_token", res.access_token);
        localStorage.setItem("user_id", res.data._id);
        localStorage.setItem("userName",res.data.userName);
        localStorage.setItem("payload", JSON.stringify(res.data));
        this.authService.isLoggedIn$.next(true);
        this.router.navigate(['/dashboard']);
        this.loginForm.reset(); 
      }, 

    
    })
  }

}
