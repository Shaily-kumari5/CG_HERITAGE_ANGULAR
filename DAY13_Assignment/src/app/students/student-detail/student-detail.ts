import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  templateUrl: './student-detail.html',
  styleUrl: './student-detail.css'
})
export class StudentDetail {

  student: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.student =
      this.route.snapshot.data['student'];
  }

  backToStudents() {
    this.router.navigate(['/students']);
  }

  backToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}