import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router);

  const accessToken = localStorage.getItem('access_token');
  const userId = localStorage.getItem('user_id');
  
  if(accessToken != null && userId != null){
    return true;
  }else{
    router.navigate(['login']);
    return false;
  }
  
};
