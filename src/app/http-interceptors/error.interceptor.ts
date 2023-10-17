import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {catchError, throwError} from "rxjs";
import {inject} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  let snackBar = inject(MatSnackBar);

  return next(req)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        snackBar.open(error.message, 'error', {duration: 2000, verticalPosition: 'top'});
        return throwError(() => error);
      })
    );
};
