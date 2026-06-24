import {
  HttpInterceptorFn,
  HttpResponse
} from '@angular/common/http';

import { tap } from 'rxjs';

export const timingInterceptor: HttpInterceptorFn = (req, next) => {

  const startTime = Date.now();

  return next(req).pipe(

    tap({

      next: (event) => {

        if (event instanceof HttpResponse) {

          const endTime = Date.now();

          const totalTime = endTime - startTime;

          console.log("Request completed in");

          console.log(totalTime + " ms");

        }

      }

    })

  );

};