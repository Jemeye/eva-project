import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'layout',
    component: LayoutComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then((m) => m.TestModule)
   },
   {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then((m)=> m.ProfileModule)
   },
   {
    path: 'aggrement',
    loadChildren: () => import('./aggrement/aggrement.module').then((m) => m.AggrementModule)
   },
   {
    path: 'eactivity',
    loadChildren: () => import('./activity/activity.module').then(m => m.ActivityModule)
   },
   {
    path: 'school',
    loadChildren: () => import('./school/school.module').then(m => m.SchoolModule)
   },
   {
    path: 'student',
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
   },
   {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
   },
   {
    path: '**',
    component: NotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
