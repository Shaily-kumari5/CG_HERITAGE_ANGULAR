import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  student: Student = new Student(
    101,
    'Shaily Kumari',
    'Angular Development'
  );

  studentDetails: string = `
Student Details

ID       : ${this.student.id}
Name     : ${this.student.name}
Course   : ${this.student.course}
`;

}