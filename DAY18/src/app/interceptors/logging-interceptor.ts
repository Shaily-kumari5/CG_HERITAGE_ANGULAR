import {
  HttpInterceptorFn,
  HttpResponse
} from '@angular/common/http';

import { tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {

  console.log("========== REQUEST ==========");
  console.log("Method :", req.method);
  console.log("URL :", req.url);
  console.log("=============================");

  return next(req).pipe(

    tap({

      next: (event) => {

        if (event instanceof HttpResponse) {

          console.log("========== RESPONSE ==========");

          console.log("Status :", event.status);

          console.log("Status Text :", event.statusText);

          console.log("==============================");

        }

      }

    })

  );

};