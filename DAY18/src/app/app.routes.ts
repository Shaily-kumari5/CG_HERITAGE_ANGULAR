import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Debug } from './components/debug/debug';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'debug',
    component: Debug
  }
];