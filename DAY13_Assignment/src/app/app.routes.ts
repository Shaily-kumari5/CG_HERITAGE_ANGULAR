import { Routes } from '@angular/router';

import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Profile } from './profile/profile';
import { NotFound } from './not-found/not-found';

import { authGuard } from './guards/auth-guard';
import { unsavedChangesGuard } from './guards/unsaved-changes-guard';

export const routes: Routes = [

{
  path:'',
  redirectTo:'login',
  pathMatch:'full'
},

{
  path:'login',
  component:Login
},

{
  path:'dashboard',
  component:Dashboard,
  canActivate:[authGuard]
},

{
  path:'profile',
  component:Profile,
  canDeactivate:[unsavedChangesGuard]
},

{
  path:'students',
  loadChildren:() =>
    import('./students/students.routes')
    .then(m => m.STUDENT_ROUTES)
},

{
  path:'**',
  component:NotFound
}

];