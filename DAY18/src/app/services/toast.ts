import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Toast {

  private messageSource = new BehaviorSubject<string>('');

  toastMessage = this.messageSource.asObservable();

  show(message: string) {

    this.messageSource.next(message);

    setTimeout(() => {

      this.messageSource.next('');

    },3000);

  }

}