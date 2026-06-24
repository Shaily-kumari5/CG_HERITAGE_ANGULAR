import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorLog {

  errors: string[] = [];

  add(error: string) {
    this.errors.push(error);
  }

  getErrors() {
    return this.errors;
  }

}