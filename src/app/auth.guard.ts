import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); // Injectez le Router

  // Vérifiez si l'utilisateur est connecté (par exemple, en vérifiant le localStorage)
  const userId = localStorage.getItem('id');

  if (userId) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};