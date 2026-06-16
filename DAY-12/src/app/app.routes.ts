import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Students } from './components/students/students';
import { StudentDetail } from './components/student-detail/student-detail';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'students',
    component: Students
  },
  {
    path: 'students/:id',
    component: StudentDetail
  },
  {
    path: '**',
    redirectTo: ''
  }
];