import { Routes } from '@angular/router';

import { StudentList } from './student-list/student-list';
import { StudentDetail } from './student-detail/student-detail';

import { studentResolver }
from '../resolvers/student-resolver';

export const STUDENT_ROUTES: Routes = [

{
  path:'',
  component:StudentList
},

{
  path:':id',
  component:StudentDetail,
  resolve:{
    student:studentResolver
  }
}

];