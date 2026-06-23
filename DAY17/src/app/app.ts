import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import {
  Observable,
  Observer,
  Subscription,
  of,
  from,
  interval,
  timer
} from 'rxjs';

import {
  map,
  filter,
  tap,
  switchMap,
  mergeMap,
  take
} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  // Assignment 1
  observableOutput: number[] = [];
  ofOutput: any[] = [];
  fromOutput: any[] = [];
  intervalOutput: number[] = [];
  timerOutput = '';

  // Assignment 2
  mapFilterOutput: number[] = [];
  switchMapOutput: any = null;
  mergeMapOutput: any[] = [];

  subscription!: Subscription;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.assignment1();
    this.assignment2();
  }

  // ---------------- Assignment 1 ----------------

  assignment1() {

    const observable = new Observable<number>((observer) => {

      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next(4);
      observer.next(5);

      observer.complete();

    });

    const observer: Observer<number> = {

      next: (value) => {
        console.log(value);
        this.observableOutput.push(value);
      },

      error: (err) => {
        console.log(err);
      },

      complete: () => {
        console.log("Observable Completed");
      }

    };

    this.subscription = observable.subscribe(observer);

    this.subscription.unsubscribe();

    // of()

    of(10,20,30,40).subscribe(value=>{
      this.ofOutput.push(value);
    });

    // from()

    from(['Angular','RxJS','Observable']).subscribe(value=>{
      this.fromOutput.push(value);
    });

    // interval()

    interval(1000)
    .pipe(take(5))
    .subscribe(value=>{
      this.intervalOutput.push(value);
    });

    // timer()

    timer(2000).subscribe(()=>{
      this.timerOutput="Timer emitted after 2 seconds";
    });

  }

  // ---------------- Assignment 2 ----------------

  assignment2(){

    of(1,2,3,4,5,6,7,8,9,10)

    .pipe(

      map(value=>value*value),

      tap(value=>console.log("Before Filter :",value)),

      filter(value=>value>25)

    )

    .subscribe(result=>{

      this.mapFilterOutput.push(result);

    });

  }

  // switchMap

  loadPost(){

    of(1)

    .pipe(

      switchMap(id=>this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`))

    )

    .subscribe(result=>{

      this.switchMapOutput=result;

    });

  }

  // mergeMap

  loadUsers(){

    this.mergeMapOutput=[];

    from([1,2,3])

    .pipe(

      mergeMap(id=>this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`))

    )

    .subscribe(user=>{

      this.mergeMapOutput.push(user);

    });

  }

}