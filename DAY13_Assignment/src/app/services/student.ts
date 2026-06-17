import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students = [

    {
      id:1,
      name:'Aman',
      course:'Angular'
    },

    {
      id:2,
      name:'Rahul',
      course:'Java'
    },

    {
      id:3,
      name:'Riya',
      course:'Python'
    },

    {
      id:4,
      name:'Ankit',
      course:'React'
    },

    {
      id:5,
      name:'Priya',
      course:'MERN'
    }

  ];

  getStudents(){
    return this.students;
  }

  getStudent(id:number){
    return this.students.find(
      x => x.id === id
    );
  }
}