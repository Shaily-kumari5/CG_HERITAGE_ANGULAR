import { Component, signal } from '@angular/core';

interface Student {
  id: number;
  name: string;
  branch: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DAY-2');

  // Question 1
  Name: string = "Shaily Kumari";
  age: number = 21;
  city: string = "Kolkata";
  Course: string = "B.Tech CSBS";

  // Question 2
  letValue: number = 10;
  readonly constValue: number = 20;

  /* Difference between let and const
     let   -> value can be changed.
     const -> value cannot be changed after initialization.
  */

  // Question 3
  Name2: string = "Shaily Kumari";
  RollId: number = 2360073;
  isStudent: boolean = true;

  // Question 4
  student: Student = {
    id: 2360073,
    name: "Shaily Kumari",
    branch: "CSBS",
    age: 21
  };

  // Question 5
  collegeName: string = "Heritage Institute of Technology";
  semester: number = 7;
  subject: string = "Angular";
}