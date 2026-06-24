import { inject } from '@angular/core';

import {
  HttpErrorResponse,
  HttpInterceptorFn
} from '@angular/common/http';

import { Router } from '@angular/router';

import {
  catchError,
  retry,
  throwError
} from 'rxjs';

import { Toast } from '../services/toast';
import { ErrorLog } from '../services/error-log';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const toast = inject(Toast);

  const router = inject(Router);

  const log = inject(ErrorLog);

  return next(req).pipe(

    retry(2),

    catchError((error: HttpErrorResponse) => {

      let message = "";

      switch (error.status) {

        case 400:

          message = "400 Bad Request";

          break;

        case 401:

          message = "401 Unauthorized";

          localStorage.removeItem("token");

          router.navigate(['/login']);

          break;

        case 403:

          message = "403 Forbidden";

          break;

        case 404:

          message = "404 Resource Not Found";

          break;

        case 500:

          message = "500 Internal Server Error";

          console.error("Something went wrong on the server.");

          break;

        default:

          message = "Unknown Error";

      }

      toast.show(message);

      log.add(message);

      return throwError(() => error);

    })

  );

};