import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { StudentService } from '../../services/student';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList {

  students;

  constructor(
    private service: StudentService,
    private router: Router
  ) {
    this.students = service.getStudents();
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}