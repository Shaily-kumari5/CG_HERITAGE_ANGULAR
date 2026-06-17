import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { StudentService } from '../services/student';

export const studentResolver: ResolveFn<any> = (route) => {

  return inject(StudentService)
    .getStudent(
      Number(route.paramMap.get('id'))
    );
};