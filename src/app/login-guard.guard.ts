import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); // Injectez le Router

  // Vérifiez si l'utilisateur est connecté
  const userId = localStorage.getItem('userId');

  if (userId) {
    // L'utilisateur est déjà connecté, redirigez-le vers la page d'accueil
    router.navigate(['/home']);
    return false;
  } else {
    // L'utilisateur n'est pas connecté, autorisez l'accès à la page de login
    return true;
  }
};