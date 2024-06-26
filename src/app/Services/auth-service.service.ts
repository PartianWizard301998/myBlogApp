import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { apiUrls } from '../Validators/api_URL';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  http = inject(HttpClient);

  /* Using the below behaviour we are setting the isLoggedIn value to True and when log off to False. */
  isLoggedIn$ = new BehaviorSubject<boolean>(false);


  registerService(registerObj : any){
    return this.http.post<any>(`${apiUrls.authServiceApi}register`, registerObj);
  }

  loginService(loginObj : any){
    return this.http.post<any>(`${apiUrls.authServiceApi}login`, loginObj);
  }

  isLoggedIn(){
    return !!localStorage.getItem("user_id");
   }
}
