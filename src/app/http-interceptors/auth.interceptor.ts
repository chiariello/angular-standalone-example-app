import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authToken = inject(AuthService).getAuthorizationToken();

  const authReq = req.clone({
    headers: req.headers.set('Authorization', 'Bearer ' + authToken)
  });

  return next(authReq);
};
