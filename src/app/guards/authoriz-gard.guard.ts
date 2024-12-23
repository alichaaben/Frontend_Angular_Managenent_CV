import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';

export const authorizGardGuardAdmin: CanActivateFn = (route, state) => {
  const authentificationService = inject(AuthentificationService);
  const router = inject(Router);

  const hasRole = authentificationService.roles.includes("ROLE_Admin");

  if (!hasRole) {
    router.navigateByUrl("/Admin/dashboard");
    return false;
  }

  return true;
};

export const authorizGardGuardManager: CanActivateFn = (route, state) => {
  const authentificationService = inject(AuthentificationService);
  const router = inject(Router);

  // Vérifier si l'utilisateur a un rôle approprié
  const hasRole = ["ROLE_Manager", "ROLE_Admin"].some(role =>
    authentificationService.roles.includes(role)
  );

  if (!hasRole) {
    // Rediriger si l'utilisateur n'a pas le rôle requis
    router.navigateByUrl("/Admin/dashboard");
    return false;
  }

  // Autoriser l'accès si un rôle est trouvé
  return true;
};

export const authorizGardGuardEmp: CanActivateFn = (route, state) => {
  const authentificationService = inject(AuthentificationService);
  const router = inject(Router);

  const hasRole = ["ROLE_Employe", "ROLE_Admin"].some(role =>
    authentificationService.roles.includes(role)
  );

  if (!hasRole) {
    router.navigateByUrl("/Admin/dashboard");
    return false;
  }

  return true;
};

