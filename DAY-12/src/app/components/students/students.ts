import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-students',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './students.html',
  styleUrl: './students.css'
})
export class Students implements OnInit {

  searchText = '';
  searchValue = '';

  students = [
    { id: 101, name: 'Aman' },
    { id: 102, name: 'Rahul' },
    { id: 103, name: 'Priya' },
    { id: 104, name: 'Ankit' },
    { id: 105, name: 'Neha' }
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchValue = params['search'] || '';
    });
  }

  searchStudent() {
    this.router.navigate(
      ['/students'],
      {
        queryParams: {
          search: this.searchText
        }
      }
    );
  }
}