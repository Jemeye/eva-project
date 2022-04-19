import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { ReadStudentComponent } from './read-student/read-student.component';
import  { NgxPaginationModule }  from  'ngx-pagination'


@NgModule({
  declarations: [
    StudentComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    ReadStudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModuleModule,
    NgxPaginationModule
  ]
})
export class StudentModule { }
