import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = Router = inject(Router);
  return authService.userSubject();
  if (user) {
    return true;
  } else {
    return false;
  }
};
