import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateSchoolComponent } from '../school/update-school/update-school.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ReadStudentComponent } from './read-student/read-student.component';
import { StudentComponent } from './student.component';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent ,
    children: [
      {
        path: '',
        redirectTo: 'read',
        pathMatch: 'full'
      },
      {
        path: 'create',
        component: CreateStudentComponent
      },
      {
        path: 'read',
        component: ReadStudentComponent
      },
      {
        path: 'update',
        component: UpdateSchoolComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
