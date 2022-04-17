import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { ReadStudentComponent } from './read-student/read-student.component';


@NgModule({
  declarations: [
    StudentComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    ReadStudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
